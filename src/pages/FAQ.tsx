import { useState } from "react";
import dot from "../assets/dot.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const QNA = [
    {
      question: "Question 1",
      answer:
        "We craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity.",
    },
    {
      question: "Question 2",
      answer:
        "We craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity.",
    },
    {
      question: "Question 3",
      answer:
        "We craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity.",
    },
    {
      question: "Question 4",
      answer:
        "We craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center justify-center px-4 sm:px-0"
    >
      <div className="w-full max-w-[640px] py-10 sm:py-20 mt-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="body-medium text-primary">FAQ</h1>
          <div className="w-[400px] text-center mt-[10px]">
            <p className="h2-regular">Do you have any questions?</p>
            <p className="h2-regular">
              Here are a few answers for most common questions
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {QNA.map((que, index) => (
            <div key={index}>
              <div className="border border-solid border-[#e6e6e6] bg-[#fcfcfc] p-[12px] rounded-[10px]">
                <div
                  className="flex flex-row justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex gap-2">
                    <img src={dot} alt="dot" />
                    <p className="body-regular">{que.question}</p>
                  </div>
                  <div>
                    {openIndex === index ? (
                      <img className="cursor-pointer" src={minus} alt="minus" />
                    ) : (
                      <img className="cursor-pointer" src={plus} alt="plus" />
                    )}
                  </div>
                </div>
                <div
                  className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {openIndex === index && (
                    <p className="body-regular text-[#999] pl-4 pt-1">
                      {que.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
