import { Badge } from "@/components/ui/badge";
import { ModulePage } from "@/components/admin/module-page";

const rows = [
  {
    principal: (
      <div>
        <p className="font-semibold">Marina Pires</p>
        <p className="text-xs text-[var(--muted-foreground)]">Ultima visita ha 12 dias</p>
      </div>
    ),
    contexto: "Coloracao premium, prefere atendimento no fim da tarde e costuma aceitar upgrades.",
    status: <Badge tone="rose">VIP</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Clara Monteiro</p>
        <p className="text-xs text-[var(--muted-foreground)]">Retorno previsto em 8 dias</p>
      </div>
    ),
    contexto: "Alta recorrencia em manicure spa e interesse recente em pacote bridal care.",
    status: <Badge tone="emerald">Recorrente</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Ana Prado</p>
        <p className="text-xs text-[var(--muted-foreground)]">Contato pendente</p>
      </div>
    ),
    contexto: "Cancelou tratamento capilar e merece acao de reativacao com incentivo leve.",
    status: <Badge tone="amber">Atencao</Badge>,
  },
];

export default function ClientesPage() {
  return (
    <ModulePage
      eyebrow="CRM do salao"
      title="Clientes com cara de relacionamento premium"
      description="A pagina base de clientes agora prioriza contexto, recorrencia e oportunidades de encantamento com uma estetica mais refinada e legivel."
      highlights={[
        { label: "Clientes ativos", value: "428", tone: "rose" },
        { label: "VIP", value: "64", tone: "emerald" },
        { label: "Inativas", value: "19", tone: "amber" },
        { label: "NPS", value: "91", tone: "slate" },
      ]}
      tableTitle="Visao de relacionamento"
      tableRows={rows}
      emptyTitle="Espaco ideal para automacoes de relacionamento"
      emptyDescription="Use este bloco para campanhas de reativacao, lembretes de retorno, aniversarios e sugestoes inteligentes de upsell."
    />
  );
}
