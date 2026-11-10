export default function handler(req: any, res: any) {
  res.status(200).json({
    status: 'ok',
    brand: 'Free Rose | Luxury Screen Print Apparel',
    timestamp: new Date().toISOString(),
  });
}
