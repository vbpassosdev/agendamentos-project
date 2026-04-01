import {
  CalendarRange,
  ClipboardList,
  History,
  LayoutDashboard,
  Scissors,
  Users2,
} from "lucide-react";

export const navigationItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Visao geral do salao",
  },
  {
    href: "/agendamentos",
    label: "Agendamentos",
    icon: CalendarRange,
    description: "Agenda em fluxo kanban",
  },
  {
    href: "/clientes",
    label: "Clientes",
    icon: Users2,
    description: "Relacionamento e perfil",
  },
  {
    href: "/procedimentos",
    label: "Procedimentos",
    icon: Scissors,
    description: "Servicos e combos",
  },
  {
    href: "/equipe",
    label: "Equipe",
    icon: ClipboardList,
    description: "Profissionais e escala",
  },
  {
    href: "/historico",
    label: "Historico",
    icon: History,
    description: "Jornada e recorrencia",
  },
] as const;

export const pageMeta: Record<
  string,
  { title: string; description: string; actionLabel: string }
> = {
  "/": {
    title: "Dashboard do salao",
    description:
      "Acompanhe receita, ocupacao, retornos e a performance do dia com uma visao premium e objetiva.",
    actionLabel: "Nova campanha",
  },
  "/agendamentos": {
    title: "Agendamentos",
    description:
      "Organize a agenda em etapas claras, identifique gargalos e reaja rapido aos encaixes e atrasos.",
    actionLabel: "Novo horario",
  },
  "/clientes": {
    title: "Clientes",
    description:
      "Centralize preferencias, recorrencia, ticket medio e proximas oportunidades de relacionamento.",
    actionLabel: "Novo cadastro",
  },
  "/procedimentos": {
    title: "Procedimentos",
    description:
      "Mantenha servicos, duracao, precificacao e pacotes com apresentacao elegante e facil leitura.",
    actionLabel: "Novo servico",
  },
  "/equipe": {
    title: "Equipe",
    description:
      "Visualize produtividade, disponibilidade e especialidades sem perder consistencia visual.",
    actionLabel: "Nova profissional",
  },
  "/historico": {
    title: "Historico",
    description:
      "Consulte interacoes recentes, remarcacoes, cancelamentos e fidelizacao com contexto rapido.",
    actionLabel: "Exportar relatorio",
  },
};
