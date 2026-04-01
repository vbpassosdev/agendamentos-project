import { Badge } from "@/components/ui/badge";
import { ModulePage } from "@/components/admin/module-page";

const rows = [
  {
    principal: (
      <div>
        <p className="font-semibold">Bianca Reis</p>
        <p className="text-xs text-[var(--muted-foreground)]">Hair specialist</p>
      </div>
    ),
    contexto: "Lidera coloracao premium, tem maior ticket medio da semana e agenda quase lotada.",
    status: <Badge tone="emerald">Top performer</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Amanda Luz</p>
        <p className="text-xs text-[var(--muted-foreground)]">Stylist</p>
      </div>
    ),
    contexto: "Excelente conversao em corte assinatura e boa flexibilidade para encaixes rapidos.",
    status: <Badge tone="rose">Disponivel</Badge>,
  },
  {
    principal: (
      <div>
        <p className="font-semibold">Julia Freitas</p>
        <p className="text-xs text-[var(--muted-foreground)]">Nail designer</p>
      </div>
    ),
    contexto: "Recorrencia forte em manicure spa, com oportunidade de ampliar agenda de sexta.",
    status: <Badge tone="amber">Escala cheia</Badge>,
  },
];

export default function EquipePage() {
  return (
    <ModulePage
      eyebrow="Operacao humana"
      title="Equipe apresentada com status, contexto e presenca"
      description="A visao da equipe ganhou um formato mais sofisticado para leitura de produtividade, especialidades e disponibilidade sem excesso visual."
      highlights={[
        { label: "Profissionais", value: "14", tone: "rose" },
        { label: "Disponiveis", value: "05", tone: "emerald" },
        { label: "Em treinamento", value: "02", tone: "slate" },
        { label: "Escala critica", value: "01", tone: "amber" },
      ]}
      tableTitle="Panorama da equipe"
      tableRows={rows}
      emptyTitle="Espaco para onboarding, escala e desenvolvimento"
      emptyDescription="Aqui entram vagas abertas, treinamentos agendados, metas individuais e monitoramento de satisfacao interna."
    />
  );
}
