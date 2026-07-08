import { NextRequest, NextResponse } from "next/server";

import { getSearchIndex, searchPosts } from "@/lib/search";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q");

    if (query) {
      const results = await searchPosts(query);

      return NextResponse.json({
        success: true,
        query,
        count: results.length,
        data: results,
      });
    }

    const index = await getSearchIndex();

    return NextResponse.json({
      success: true,
      count: index.length,
      data: index,
    });
  } catch (error) {
    console.error("[SEARCH_API]", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate search index.",
      },
      {
        status: 500,
      }
    );
  }
}
