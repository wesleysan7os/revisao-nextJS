export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ nome: "Wes" });
  } else {
    res.status(200).json({ nome: "victor" });
  }
};
