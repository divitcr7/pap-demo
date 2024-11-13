import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import WebPage2 from "./WebPage2";
import WebPage3 from "./WebPage3";
import WebPage4 from "./WebPage4";
import WebPage5 from "./WebPage5";
import WebPage6 from "./WebPage6";
import WebPage7 from "./WebPage7";
import WebPage8 from "./WebPage8";
import WebPage9 from "./WebPage9";

// Define individual step components
const StepOne = () => <WebPage2 />;
const StepTwo = () => <WebPage3 />;
const StepThree = () => <WebPage4 />;
const StepFour = () => <WebPage5 />;
const StepFive = () => <WebPage6 />;
const StepSix = () => <WebPage7 />;
const StepSeven = () => <WebPage8 />;
const StepEight = () => <WebPage9 />;

// Array of step components
const stepComponents = [
  <StepOne />,
  <StepTwo />,
  <StepThree />,
  <StepFour />,
  <StepFive />,
  <StepSix />,
  <StepSeven />,
  <StepEight />
];

export function StepperComp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [content, setContent] = React.useState(stepComponents[0]);
  const [fade, setFade] = React.useState(true);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  React.useEffect(() => {
    setFade(false); // Start fade-out
    const timer = setTimeout(() => {
      setContent(stepComponents[activeStep]); // Update content after delay
      setFade(true); // Start fade-in after content update
    }, 1000);
    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [activeStep]);

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-indigo-200 to-purple-300">
      <h1 className="capitalize text-2xl text-center font-bold p-12">Welcome to lease filling process</h1>
      <div className="w-full py-4 px-8">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          placeholder="" // default value if required
          title="Stepper Process" // default title
           onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}        >
          {stepComponents.map((_, index) => (
            <Step key={index} onClick={() => setActiveStep(index)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{index + 1}</Step>
          ))}
        </Stepper>

        <div
          className={`mt-12 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {content}
        </div>

        <div className="mt-16 text-center flex items-center w-full space-x-4 justify-center">
          <Button onClick={handlePrev} disabled={isFirstStep} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
