import {
  ArrowUpRight,
  CalendarClock,
  Gem,
  HeartHandshake,
  Scissors,
  Star,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Receita do dia", value: "R$ 8.420", delta: "+18%", tone: "rose" as const },
  { label: "Ocupacao da agenda", value: "87%", delta: "+6%", tone: "emerald" as const },
  { label: "Retorno em 30 dias", value: "64%", delta: "+11%", tone: "amber" as const },
  { label: "Ticket medio", value: "R$ 216", delta: "+9%", tone: "slate" as const },
];

const agenda = [
  { time: "09:00", client: "Marina Pires", service: "Coloracao premium", professional: "Bianca" },
  { time: "10:30", client: "Livia Nunes", service: "Corte + escova", professional: "Amanda" },
  { time: "13:00", client: "Clara Monteiro", service: "Spa de maos", professional: "Julia" },
  { time: "16:15", client: "Ana Prado", service: "Tratamento capilar", professional: "Bianca" },
];

const teamHighlights = [
  { name: "Bianca Reis", role: "Hair specialist", sales: "R$ 2.140" },
  { name: "Julia Freitas", role: "Nail designer", sales: "R$ 1.420" },
  { name: "Amanda Luz", role: "Stylist", sales: "R$ 1.180" },
];

export function DashboardView() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="relative overflow-hidden">
            <div className="absolute inset-x-6 top-0 h-20 rounded-b-[32px] bg-[linear-gradient(180deg,rgba(246,231,227,0.65),transparent)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">{metric.label}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                  {metric.value}
                </h3>
              </div>
              <Badge tone={metric.tone}>{metric.delta}</Badge>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <Card className="overflow-hidden border-none bg-[linear-gradient(135deg,#7d4e49,#c89389_62%,#f0d4cd)] text-white shadow-[0_30px_80px_-44px_rgba(95,58,53,0.95)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge className="bg-white/18 text-white" tone="slate">
                Experiencia premium em tempo real
              </Badge>
              <h3 className="mt-5 font-display text-5xl leading-[1.05]">
                Sua operacao mais bonita, inteligente e clara.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                Acompanhe produtividade, encaixes e fidelizacao com uma camada visual mais sofisticada e uma leitura muito mais rapida da rotina.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  className="border-white/20 bg-white/15 text-white hover:bg-white/20"
                >
                  Ver agenda completa
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  Explorar relatorios
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Gem className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Clientes VIP agendados</p>
                    <p className="mt-1 text-2xl font-semibold">14 hoje</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Retencao prevista</p>
                    <p className="mt-1 text-2xl font-semibold">92%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Agenda do dia" eyebrow="Ritmo operacional">
          <div className="space-y-4">
            {agenda.map((item) => (
              <div
                key={`${item.time}-${item.client}`}
                className="flex items-center gap-4 rounded-3xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white text-[var(--accent-strong)] shadow-inner">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Hora</span>
                  <span className="text-base font-semibold">{item.time}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--foreground)]">{item.client}</p>
                  <p className="truncate text-sm text-[var(--muted-foreground)]">{item.service}</p>
                </div>
                <Badge tone="rose">{item.professional}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr_0.9fr]">
        <Card title="Performance da equipe" eyebrow="Destaques">
          <div className="space-y-4">
            {teamHighlights.map((member, index) => (
              <div key={member.name} className="flex items-center gap-4 rounded-3xl bg-[var(--panel)] p-4">
                <Avatar name={member.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--foreground)]">{member.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{member.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[var(--muted-foreground)]">Vendas</p>
                  <p className="font-semibold text-[var(--foreground)]">{member.sales}</p>
                </div>
                <Badge tone={index === 0 ? "emerald" : "slate"}>
                  {index === 0 ? "Top" : "Em alta"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Procedimentos preferidos" eyebrow="Curva de demanda">
          <div className="space-y-4">
            {[
              { name: "Coloracao premium", value: 92, icon: Scissors },
              { name: "Corte assinatura", value: 81, icon: Star },
              { name: "Cronograma capilar", value: 67, icon: CalendarClock },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--panel)] text-[var(--accent-strong)]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">{item.value}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[var(--panel-strong)]">
                  <div
                    className="h-2 rounded-full bg-[linear-gradient(90deg,#8a5a55,#dfb5ad)]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Acoes rapidas" eyebrow="UX otimizada">
          <div className="space-y-3">
            {[
              "Confirmar encaixes por WhatsApp",
              "Acionar lista de espera elegante",
              "Lancar promocao para clientes inativas",
              "Exportar resumo financeiro do turno",
            ].map((label) => (
              <button
                key={label}
                className="flex w-full items-center justify-between rounded-3xl border border-[var(--border)] bg-[var(--panel)] px-4 py-4 text-left text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent-soft)] hover:bg-white"
              >
                {label}
                <ArrowUpRight className="h-4 w-4 text-[var(--accent-strong)]" />
              </button>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
