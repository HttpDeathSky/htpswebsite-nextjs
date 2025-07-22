import java.io.*;
import java.util.*;

public class PACRulesSorter {
    // 解析规则中的域名
    private static String extractDomain(String rule) {
        if (rule == null || rule.trim().isEmpty()) return null;
        String domain = rule.trim();
        if (domain.startsWith("||")) domain = domain.substring(2);
        if (domain.startsWith(".")) domain = domain.substring(1);
        int spaceIndex = domain.indexOf(" ");
        if (spaceIndex > 0) domain = domain.substring(0, spaceIndex);
        return domain;
    }

    // 比较两个文件的规则
    private static void compareRules(String file1, String file2) throws IOException {
        Set<String> domains1 = new HashSet<>();
        Set<String> domains2 = new HashSet<>();

        // 读取第一个文件的域名
        try (BufferedReader reader = new BufferedReader(new FileReader(file1))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (!line.startsWith("@") && line.endsWith("+proxy")) {
                    String domain = extractDomain(line);
                    if (domain != null) domains1.add(domain);
                }
            }
        }

        // 读取第二个文件的域名
        try (BufferedReader reader = new BufferedReader(new FileReader(file2))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (!line.startsWith("@") && line.endsWith("+proxy")) {
                    String domain = extractDomain(line);
                    if (domain != null) domains2.add(domain);
                }
            }
        }

        // 比较差异
        Set<String> missingInOutput = new HashSet<>(domains1);
        missingInOutput.removeAll(domains2);
        Set<String> extraInOutput = new HashSet<>(domains2);
        extraInOutput.removeAll(domains1);

        if (!missingInOutput.isEmpty()) {
            System.out.println("输出文件缺少以下域名规则：");
            missingInOutput.forEach(System.out::println);
        }
        if (!extraInOutput.isEmpty()) {
            System.out.println("输出文件多出以下域名规则：");
            extraInOutput.forEach(System.out::println);
        }
        if (missingInOutput.isEmpty() && extraInOutput.isEmpty()) {
            System.out.println("输入和输出文件的域名规则完全匹配！");
        }
    }

    public static void main(String[] args) {
        String inputFile = "OmegaRules_auto_switch.txt";
        String outputFile = "OmegaRules_auto_switch_sorted.txt";
        
        try {
            // 读取文件
            BufferedReader reader = new BufferedReader(new FileReader(inputFile));
            TreeSet<String> proxyRules = new TreeSet<>();
            List<String> headerLines = new ArrayList<>();
            String line;
            boolean isHeader = true;
            
            // 处理文件头部
            while ((line = reader.readLine()) != null) {
                if (isHeader && (line.startsWith("[") || line.startsWith("@"))) {
                    headerLines.add(line);
                    continue;
                }
                isHeader = false;
                
                // 跳过空行、直连规则和@开头的注释行
                if (line.trim().isEmpty() || line.equals("* +direct") || line.startsWith("@")) {
                    continue;
                }
                
                // 添加到TreeSet进行自动去重和排序
                if (line.endsWith("+proxy")) {
                    proxyRules.add(line);
                }
            }
            reader.close();
            
            // 写入排序后的文件
            BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile));
            
            // 写入头部
            for (String header : headerLines) {
                writer.write(header);
                writer.newLine();
            }
            writer.newLine();
            
            // 写入排序后的规则
            for (String rule : proxyRules) {
                writer.write(rule);
                writer.newLine();
            }
            
            // 写入直连规则
            writer.newLine();
            writer.write("* +direct");
            
            writer.close();
            System.out.println("规则排序完成！输出文件：" + outputFile);
            
            // 添加规则比对
            compareRules(inputFile, outputFile);
            
        } catch (IOException e) {
            System.err.println("处理文件时发生错误：" + e.getMessage());
        }
    }
}
