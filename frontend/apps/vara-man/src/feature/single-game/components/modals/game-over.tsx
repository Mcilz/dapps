import { useAtom } from 'jotai';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useApp } from '@/app/context/ctx-app';
import { useGame } from '@/app/context/ctx-game';
import { Level } from '@/app/utils';
import { Button } from '@/components';
import { Icons } from '@/components/ui/icons';
import { Modal } from '@/components/ui/modal/modal2';
import { GAME_OVER, COINS } from '@/feature/game/consts';
import { calculatePoints } from '@/feature/game/utils/calculatePoints';

export const GameOverModal = ({ restartGame }: { restartGame: () => void }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [, setGameOver] = useAtom(GAME_OVER);
  const { isPending } = useApp();

  const [coins, setCoins] = useAtom(COINS);
  const { configState } = useGame();
  const currentLevel = searchParams.get('level') as Level;

  const score = configState && calculatePoints(coins, configState, currentLevel);

  const onResetGame = () => {
    setGameOver(false);
    setCoins({ gold: 0, silver: 0 });
    restartGame();
  };

  return (
    <div>
      <Modal open>
        <Modal.Content>
          <div className="flex flex-col justify-center gap-5 text-center">
            <div>
              <h3 className="text-3xl font-semibold">Game Over</h3>
              <p className="text-[#555756] mt-2">You're doing great, keep it up!</p>
            </div>
            <div className="bg-[#F7F9FA] w-full p-5 font-medium flex gap-5 justify-center items-center">
              Your score:
              <span className="flex items-center gap-2 font-semibold">
                <Icons.statsCoins />
                {score}
              </span>
            </div>
            <div className="flex justify-evenly gap-6">
              <Button
                className="w-full"
                variant="gray"
                onClick={() => {
                  onResetGame();
                  navigate('/');
                }}
                disabled={isPending}>
                Close
              </Button>
              <Button className="w-full" onClick={() => onResetGame()} isLoading={isPending} disabled={isPending}>
                Play again
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
