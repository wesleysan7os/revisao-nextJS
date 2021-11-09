import { useRouter } from "next/router";
import Link from "next/link";

export default function codigoENome() {
  const router = useRouter();
  const codigo = router.query.codigo;
  const nome = router.query.nome;

  console.log(router);

  return (
    <div>
      <h1>Rotas / {codigo} / Buscar</h1>
      <h1>Rotas / {nome} / Buscar</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
