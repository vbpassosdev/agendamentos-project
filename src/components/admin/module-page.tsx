import { ReactNode } from "react";
import { ArrowUpRight, Clock3, Users2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { EmptyState } from "@/components/ui/empty-state";

interface TableRow {
  principal: ReactNode;
  contexto: ReactNode;
  status: ReactNode;
}

interface ModulePageProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights: Array<{
    label: string;
    value: string;
    tone: "rose" | "amber" | "emerald" | "slate";
  }>;
  tableTitle: string;
  tableRows: TableRow[];
  emptyTitle: string;
  emptyDescription: string;
}

export function ModulePage({
  eyebrow,
  title,
  description,
  highlights,
  tableTitle,
  tableRows,
  emptyTitle,
  emptyDescription,
}: ModulePageProps) {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-none bg-[linear-gradient(135deg,#fff8f6,#f5e8e4)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--foreground)]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
            {description}
          </p>
        </Card>

        <Card title="Indicadores rapidos" eyebrow="Base consistente">
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-3xl bg-[var(--panel)] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
                  <Badge tone={item.tone}>{item.value}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card title={tableTitle} eyebrow="Tabela moderna">
          <DataTable
            columns={[
              {
                key: "principal",
                header: "Principal",
                render: (row) => <div>{row.principal}</div>,
              },
              {
                key: "contexto",
                header: "Contexto",
                render: (row) => <div>{row.contexto}</div>,
              },
              {
                key: "status",
                header: "Status",
                render: (row) => <div>{row.status}</div>,
              },
            ]}
            data={tableRows}
          />
        </Card>

        <Card title="Insights de UX" eyebrow="Detalhes elegantes">
          <div className="space-y-4">
            {[
              {
                icon: Users2,
                title: "Leitura mais rapida",
                description:
                  "Tipografia, contraste e espacamento mais refinados aceleram a consulta da operacao.",
              },
              {
                icon: Clock3,
                title: "Estados claros",
                description:
                  "Hover, active, loading e empty ficam previsiveis e consistentes em todos os modulos.",
              },
              {
                icon: ArrowUpRight,
                title: "Base escalavel",
                description:
                  "O visual funciona para crescer com relatorios, CRM, estoque ou financeiro sem retrabalho.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--accent-strong)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <Card title="Relacionamentos em destaque" eyebrow="Avatares + badges">
          <div className="space-y-4">
            {[
              { name: "Marina Pires", subtitle: "Alta recorrencia", badge: "VIP" },
              { name: "Clara Monteiro", subtitle: "Aceita upgrades", badge: "Potencial" },
              { name: "Ana Prado", subtitle: "Retorno em aberto", badge: "Atencao" },
            ].map((person, index) => (
              <div key={person.name} className="flex items-center gap-4 rounded-3xl bg-[var(--panel)] p-4">
                <Avatar name={person.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--foreground)]">{person.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{person.subtitle}</p>
                </div>
                <Badge tone={index === 2 ? "amber" : "rose"}>{person.badge}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          actionLabel="Criar automacao"
        />
      </section>
    </div>
  );
}
