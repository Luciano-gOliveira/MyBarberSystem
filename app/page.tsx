// "use client" renderiza parcialmente do lado do servidor

import { Button } from "./_components/ui/button";

//server component = acessado do lado do servidor, bd, var ambientes (sensiveis) não posso adicionar iteratividade


export default function Home() {
  return (
    <Button>Test</Button>
  );
}
