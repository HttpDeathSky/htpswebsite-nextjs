import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

// 创建 Octokit 实例并使用 GitHub Token 进行身份验证
const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN, // 请在 .env 文件中存储 GitHub Token
});

export async function GET() {
	try {
		if (!process.env.GITHUB_TOKEN) {
			throw new Error("GitHub Token未设置");
		}
		// 发送请求获取 GitHub 提交记录
		const response = await octokit.request(
			"GET /repos/{owner}/{repo}/commits",
			{
				owner: "HttpDeathSky",
				repo: "htpswebsite-nextjs",
			},
		);
		// 返回提交记录数据
		return NextResponse.json(response.data);
	} catch (error) {
		console.error("GitHub API错误:", error);
		return NextResponse.json({ status: 500 });
	}
}
