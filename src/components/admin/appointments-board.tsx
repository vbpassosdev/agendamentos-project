import { Clock3, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";

const columns = [
  {
    title: "Confirmados",
    tone: "emerald" as const,
    count: 8,
    items: [
      { client: "Marina Pires", time: "09:00", service: "Coloracao premium", professional: "Bianca", status: "VIP" },
      { client: "Clara Monteiro", time: "10:20", service: "Escova glow", professional: "Amanda", status: "Recorrente" },
      { client: "Vanessa Costa", time: "14:00", service: "Spa de maos", professional: "Julia", status: "Pago" },
    ],
  },
  {
    title: "Em atendimento",
    tone: "rose" as const,
    count: 3,
    items: [
      { client: "Livia Nunes", time: "11:10", service: "Corte assinatura", professional: "Amanda", status: "Sala 2" },
      { client: "Ana Prado", time: "13:40", service: "Tratamento capilar", professional: "Bianca", status: "Atencao" },
    ],
  },
  {
    title: "Finalizacao",
    tone: "amber" as const,
    count: 4,
    items: [
      { client: "Paula Mendes", time: "15:15", service: "Blindagem", professional: "Bianca", status: "Upsell" },
      { client: "Rita Sa", time: "16:30", service: "Pedicure spa", professional: "Julia", status: "Checkout" },
    ],
  },
  {
    title: "Pendencias",
    tone: "slate" as const,
    count: 2,
    items: [],
  },
];

export function AppointmentsBoard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card
          className="border-none bg-[linear-gradient(135deg,#fffaf8,#f8ebe7)]"
          title="Fluxo operacional do dia"
          eyebrow="Kanban premium"
        >
          <p className="max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
            As colunas ajudam a visualizar rapidamente o progresso da agenda, priorizar encaixes e tratar gargalos com uma camada visual limpa e mais sofisticada.
          </p>
        </Card>
        <Card title="Ritmo do turno" eyebrow="Sinais rapidos">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Check-ins", value: "18" },
              { label: "Atrasos", value: "02" },
              { label: "Encaixes", value: "05" },
              { label: "Espera", value: "03" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-[var(--panel)] p-4">
                <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 2xl:grid-cols-4">
        {columns.map((column) => (
          <Card
            key={column.title}
            title={column.title}
            eyebrow={`${column.count} cards ativos`}
            action={<Badge tone={column.tone}>{column.count}</Badge>}
            className="min-h-[520px]"
          >
            {column.items.length > 0 ? (
              <div className="space-y-4">
                {column.items.map((item) => (
                  <article
                    key={`${column.title}-${item.client}`}
                    className="rounded-[26px] border border-[var(--border)] bg-[var(--panel)] p-4 transition hover:-translate-y-1 hover:border-[var(--accent-soft)] hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={item.client} />
                        <div>
                          <h3 className="font-semibold text-[var(--foreground)]">{item.client}</h3>
                          <p className="text-sm text-[var(--muted-foreground)]">{item.service}</p>
                        </div>
                      </div>
                      <Badge tone={column.tone}>{item.status}</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                      <span className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4" />
                        {item.time}
                      </span>
                      <span>{item.professional}</span>
                    </div>
                  </article>
                ))}
                <Button
                  variant="ghost"
                  className="w-full rounded-[22px] border border-dashed border-[var(--accent-soft)] bg-white/50"
                >
                  Adicionar cartao
                </Button>
              </div>
            ) : (
              <EmptyState
                title="Sem pendencias visiveis"
                description="Quando houver cancelamentos, atrasos ou necessidade de retorno, os cards aparecerao aqui com contexto rapido."
                actionLabel="Criar lembrete"
                icon={<Sparkles className="h-7 w-7" />}
              />
            )}
          </Card>
        ))}
      </section>
    </div>
  );
}
