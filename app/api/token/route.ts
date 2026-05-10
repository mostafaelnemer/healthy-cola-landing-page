export async function GET() {
  try {
    const response = await fetch(`${process.env.TOKEN_INFO_URL}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = (await response.json()) as APITokenInfoResponse;
    return Response.json(result);
  } catch (error) {
    console.error(`Error in GET ${process.env.TOKEN_INFO_URL}:`, error);
    return Response.json(
      { error: "Failed to fetch token information" },
      { status: 500 }
    );
  }
}
