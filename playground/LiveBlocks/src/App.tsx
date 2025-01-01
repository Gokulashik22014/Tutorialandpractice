import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Room } from "./Room"

export default function App() {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_x1poI71K6W1H70jlebo-Rymp9CJjs1P9Nq2zFF4dnYlSjEIMuEbSW-3sVZXGXxXp"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Room />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}