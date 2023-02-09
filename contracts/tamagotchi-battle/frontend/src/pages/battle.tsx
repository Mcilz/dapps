import { BattlePlayersQueue } from '../components/sections/battle-players-queue';
import { BattleWaitRegistration } from '../components/sections/battle-wait-registration';
import { useApp, useBattle } from '../app/context';
import { BattleWaitAdmin } from '../components/sections/battle-wait-admin';
import { BattleRound } from '../components/sections/battle-round';
import { BattleWinner } from 'components/sections/battle-winner';

export const Battle = () => {
  const { isAdmin } = useApp();
  const { battleState: battle } = useBattle();

  return (
    <>
      {battle?.state === 'Registration' && (isAdmin ? <BattleWaitAdmin /> : <BattleWaitRegistration />)}
      {battle && ['GameIsOn', 'WaitNextRound'].includes(battle.state) && <BattleRound />}
      {battle && battle?.state === 'GameIsOver' && <BattleWinner battle={battle} />}
      {battle && Object.keys(battle.players).length > 0 && <BattlePlayersQueue />}
    </>
  );
};
