import { useEffect, useState } from "react";

export default function QuestionTimer({ onTimeout, timeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // Reset the timer when `timeout` changes
    useEffect(() => {
        setRemainingTime(timeout);
    }, [timeout]);

    // Countdown timeout
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    }, [onTimeout, timeout]);

    // Decrease progress bar value every 100ms
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 100);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="progress-bar-container">
            <progress
                id="question-time"
                max={timeout}
                value={remainingTime}
                className={mode || ""}
            />
        </div>
    );
}
