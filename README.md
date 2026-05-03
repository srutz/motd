# Motd Project

Dieses Projekt zeigt, wie man Login-typische Themen im Frontend umsetzt: Formularvalidierung,
Passwortfelder mit Sichtbarkeitsumschalter, Ladezustände während der Anfrage sowie
geschützte Routen, die nur nach erfolgreichem Login erreichbar sind. Der Login selbst
ist bewusst als Dummy implementiert — es gibt kein echtes Backend, der „Netzwerkaufruf"
wird lediglich durch ein kurzes Timeout simuliert.

Der globale Auth-Zustand wird mit [Jotai](https://jotai.org/) (Atom-basiertes State Management)
gehalten und ist damit komponentenübergreifend verfügbar. Das ist aber nur eine Simulation für einen wirklichen Server.

## Login-relevante Komponenten und Hooks

| Datei | Beschreibung |
|---|---|
| `src/pages/LoginDialog.tsx` | Login-Formular als modaler Dialog; übernimmt Eingabe, Validierung und ruft `useLogin` auf |
| `src/components/PasswordInput.tsx` | Passwortfeld mit Toggle zum Ein-/Ausblenden des Klartexts |
| `src/hooks/useLogin.ts` | Simuliert eine Mutation (analog zu z. B. React Query); verwaltet `isPending`-, Erfolgs- und Fehlerzustand und schreibt nach dem Login in den globalen Auth-Atom |
| `src/hooks/useMyAccount.ts` | Liest den Auth-Atom aus und gibt den eingeloggten User zurück; wird überall dort verwendet, wo der Login-Zustand bekannt sein muss |

```
npm i
npm run dev
```

