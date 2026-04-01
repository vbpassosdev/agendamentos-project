import { Badge } from "@/components/ui/badge";
import { ModulePage } from "@/components/admin/module-page";

const rows = [
  {
    principal: (
      <div>
        <p className="font-semibold">Reagendamento de Marina Pires</p>
        <p className="text-xs text-[var(--muted-foreground)]">Hoje • 08:42</p>
      </div>
    ),
    contexto: "Cliente moveu a coloracao para sexta e manteve o combo com tratamento premium.",
    status: <Badge tone="emerald">Resolvido</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Cancelamento de Ana Prado</p>
        <p className="text-xs text-[var(--muted-foreground)]">Ontem • 17:10</p>
      </div>
    ),
    contexto: "Tratamento capilar cancelado por conflito de agenda; sugerir nova data em ate 48h.",
    status: <Badge tone="amber">Acompanhar</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Feedback 5 estrelas</p>
        <p className="text-xs text-[var(--muted-foreground)]">Ontem • 13:25</p>
      </div>
    ),
    contexto: "Clara elogiou atendimento da Julia e sinalizou interesse em pacote mensal.",
    status: <Badge tone="rose">Oportunidade</Badge>,
  },
];

export default function HistoricoPage() {
  return (
    <ModulePage
      eyebrow="Linha do tempo"
      title="Historico com leitura clara de eventos e contexto"
      description="A base visual do historico deixa remarcacoes, cancelamentos e oportunidades de fidelizacao muito mais faceis de interpretar."
      highlights={[
        { label: "Eventos hoje", value: "26", tone: "rose" },
        { label: "Resolvidos", value: "18", tone: "emerald" },
        { label: "Pendentes", value: "04", tone: "amber" },
        { label: "Insights", value: "09", tone: "slate" },
      ]}
      tableTitle="Eventos recentes"
      tableRows={rows}
      emptyTitle="Base pronta para auditoria elegante da operacao"
      emptyDescription="Este espaco pode receber filtros por periodo, trilha de alteracoes, notas internas e exportacao de historico para relatorios."
    />
  );
}
