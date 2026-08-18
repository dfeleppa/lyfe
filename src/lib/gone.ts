export function gone() {
  return new Response(null, {
    status: 410,
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
