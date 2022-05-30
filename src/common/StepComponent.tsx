interface Steps {
  steps: number;
  currentStep: number;
  setCurrentStep: any;
  navigateSteps: any;
}

const StepComponent = ({
  steps,
  currentStep,
  setCurrentStep,
  navigateSteps,
}: Steps): JSX.Element => {
  const KeyPressHandler = () => {};
  const stepNumberStyle = {
    width: 25,
    height: 25,
    borderRadius: 50,
    border: '2px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const selectedStepNumberStyle = {
    width: 25,
    height: 25,
    borderRadius: 50,
    border: '2px solid #C41F3E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C41F3E',
    color: 'white',
  };
  const allSteps = [];
  for (let i = 0; i < steps; i += 1) {
    if (i > 0 && i < steps) {
      allSteps.push(
        <div
          style={
            currentStep > i
              ? { height: 2, width: 15, backgroundColor: '#C41F3E' }
              : { height: 2, width: 15, backgroundColor: 'grey' }
          }
          key={`dash_${i}`}
        />,
      );
    }
    allSteps.push(
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div
        style={currentStep >= i + 1 ? selectedStepNumberStyle : stepNumberStyle}
        role="button"
        onKeyPress={KeyPressHandler}
        onClick={() => {
          setCurrentStep(i + 1);
          if (navigateSteps) {
            navigateSteps(i);
          }
        }}
        key={`step_${i}`}
      >
        {i + 1}
      </div>,
    );
  }
  return (
    <div className="d-flex align-items-center mt-3 mb-3">
      <span style={{ fontWeight: 'bold', marginRight: 10 }}>Steps: </span>
      {allSteps}
    </div>
  );
};

export default StepComponent;
