import { useRouter } from "next/router";
import Link from "next/link";

export default function params() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>Rotas Params</h1>
      <h1>
        Rotas Params: {id} e {nome}
        <Link href="/rotas">
          <button>Voltar</button>
        </Link>
      </h1>
    </div>
  );
}
