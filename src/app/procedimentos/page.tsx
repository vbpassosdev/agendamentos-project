import { Badge } from "@/components/ui/badge";
import { ModulePage } from "@/components/admin/module-page";

const rows = [
  {
    principal: (
      <div>
        <p className="font-semibold">Coloracao premium</p>
        <p className="text-xs text-[var(--muted-foreground)]">120 min • R$ 390</p>
      </div>
    ),
    contexto: "Servico assinatura do salao com alta margem, possibilidade de combo com tratamento.",
    status: <Badge tone="emerald">Alta demanda</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Corte assinatura</p>
        <p className="text-xs text-[var(--muted-foreground)]">60 min • R$ 145</p>
      </div>
    ),
    contexto: "Entrada estrategica para fidelizacao e venda casada de finalizacao premium.",
    status: <Badge tone="rose">Iconico</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Spa de maos</p>
        <p className="text-xs text-[var(--muted-foreground)]">50 min • R$ 110</p>
      </div>
    ),
    contexto: "Bom encaixe entre atendimentos, ideal para promover upgrades em horarios ociosos.",
    status: <Badge tone="slate">Versatil</Badge>,
  },
];

export default function ProcedimentosPage() {
  return (
    <ModulePage
      eyebrow="Catalogo elegante"
      title="Procedimentos organizados com clareza comercial"
      description="Servicos, duracao, posicionamento e oportunidades de combinacao aparecem em uma estrutura pronta para evoluir com precificacao e performance."
      highlights={[
        { label: "Servicos ativos", value: "32", tone: "rose" },
        { label: "Combos", value: "08", tone: "slate" },
        { label: "Alta margem", value: "11", tone: "emerald" },
        { label: "Sazonais", value: "05", tone: "amber" },
      ]}
      tableTitle="Portfolio do salao"
      tableRows={rows}
      emptyTitle="Area pronta para pacotes e colecoes sazonais"
      emptyDescription="Este estado vazio acomoda lancamentos, bundles de datas especiais e recomendacoes de servicos por perfil de cliente."
    />
  );
}
