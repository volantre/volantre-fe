"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const leagues = [
  {
    id: "epl",
    name: "EPL",
    fullName: "프리미어리그",
    clubs: [
      { id: "arsenal", name: "아스널", crest: "🔴" },
      { id: "chelsea", name: "첼시", crest: "🔵" },
      { id: "liverpool", name: "리버풀", crest: "🔴" },
      { id: "manchester-city", name: "맨시티", crest: "🩵" },
      { id: "manchester-united", name: "맨유", crest: "🔴" },
      { id: "tottenham", name: "토트넘", crest: "⚪" },
    ],
  },
  {
    id: "laliga",
    name: "라리가",
    fullName: "라리가",
    clubs: [
      { id: "real-madrid", name: "레알 마드리드", crest: "⚪" },
      { id: "barcelona", name: "바르셀로나", crest: "🔵" },
      { id: "atletico-madrid", name: "아틀레티코", crest: "🔴" },
      { id: "sevilla", name: "세비야", crest: "⚪" },
    ],
  },
  {
    id: "seriea",
    name: "세리에A",
    fullName: "세리에A",
    clubs: [
      { id: "juventus", name: "유벤투스", crest: "⚫" },
      { id: "inter", name: "인터", crest: "🔵" },
      { id: "milan", name: "AC밀란", crest: "🔴" },
      { id: "napoli", name: "나폴리", crest: "🔵" },
    ],
  },
  {
    id: "bundesliga",
    name: "분데스리가",
    fullName: "분데스리가",
    clubs: [
      { id: "bayern", name: "바이에른", crest: "🔴" },
      { id: "dortmund", name: "도르트문트", crest: "🟡" },
      { id: "leipzig", name: "라이프치히", crest: "🔴" },
    ],
  },
  {
    id: "kleague",
    name: "K리그",
    fullName: "K리그1",
    clubs: [
      { id: "ulsan", name: "울산 현대", crest: "🔵" },
      { id: "jeonbuk", name: "전북 현대", crest: "🟢" },
      { id: "pohang", name: "포항 스틸러스", crest: "🔴" },
      { id: "suwon", name: "수원 삼성", crest: "🔵" },
    ],
  },
];

export function LeagueMegaMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 max-h-96 ">
      {leagues.map((league) => (
        <div key={league.id} className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-semibold">
              {league.name}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {league.fullName}
            </span>
          </div>
          <div className="grid gap-2">
            {league.clubs.map((club) => (
              <Link
                key={club.id}
                href={`/boards/${league.id}/${club.id}`}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <span className="text-lg">{club.crest}</span>
                <span className="text-sm font-medium">{club.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
