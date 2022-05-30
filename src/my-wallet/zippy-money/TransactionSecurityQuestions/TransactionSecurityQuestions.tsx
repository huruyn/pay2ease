import {
  Button,
  FormControl,
} from 'react-bootstrap';
import { useState } from 'react';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';

export default function TransactionSecurityQuestions({
  mainInfo,
  setMainInfo,
  handleTriggerTransaction,
  isProcessing,
}: Pick<TransactionInterface, 'mainInfo' | 'setMainInfo' | 'handleTriggerTransaction' | 'isProcessing'>) {
  const [confirmAnswer, setConfirmAnswer] = useState<string>('');
  const handleSubmit = () => {
    if (mainInfo.securityQuestion.length > 40 || mainInfo.securityAnswer !== confirmAnswer) {
      return;
    }
    handleTriggerTransaction();
  };

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="title">
          Security Question
        </div>
        <div className="security-question">
          <FormControl
            placeholder="Create a security question (Up to 40 Char.)"
            value={mainInfo.securityQuestion}
            onChange={(evt) => setMainInfo({ ...mainInfo, securityQuestion: evt.target.value })}
          />
          <FormControl
            placeholder="Security Answer (No Space)"
            type={mainInfo.showAnswer ? 'text' : 'password'}
            value={mainInfo.securityAnswer}
            onChange={(evt) => setMainInfo({ ...mainInfo, securityAnswer: evt.target.value })}
          />
          <FormControl
            placeholder="Re-enter Security Answer"
            type={mainInfo.showAnswer ? 'text' : 'password'}
            value={confirmAnswer}
            onChange={(evt) => setConfirmAnswer(evt.target.value)}
          />
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            {isProcessing && <div className="loading spinner-border" role="status" />}
            Zipp It
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
