import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const { handle, pic, desc, links } = body;

  // ✅ Validate required fields
  if (!handle || typeof handle !== "string" || handle.trim() === "") {
    return Response.json({
      success: false,
      error: true,
      message: "Handle is required",
      result: null,
    });
  }

  if (!Array.isArray(links) || links.length === 0) {
    return Response.json({
      success: false,
      error: true,
      message: "At least one link is required",
      result: null,
    });
  }

  const client = await clientPromise;
  const db = client.db("LinkTree");
  const collection = db.collection("links");

  // ✅ Prevent duplicate handles
  const existing = await collection.findOne({ handle: handle.trim() });
  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "This LinkTree already exists",
      result: null,
    });
  }

  const result = await collection.insertOne({
    handle: handle.trim(),
    pic,
    desc,
    links, // [{ link, linktext }]
  });

  return Response.json({
    success: true,
    error: false,
    message: "Your LinkTree has been generated",
    result,
  });
}
