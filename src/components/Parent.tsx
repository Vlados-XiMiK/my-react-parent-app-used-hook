import React, { useState, useMemo, useCallback } from "react";
import Title from "../Title";
import Button from "../Button";
import Display from "../Display";

const Parent = () => {
    const [salary, setSalary] = useState(2000);
    const [age, setAge] = useState(30);

    const incrementAge = useCallback(() => {
        setAge((prevAge) => prevAge + 5);
    }, []);

    const incrementSalary = useCallback(() => {
        setSalary((prevSalary) => prevSalary + 100);
    }, []);

    const memoizedTitle = useMemo(() => {
        return <Title />;
    }, []);

    const memoizedAgeDisplay = useMemo(() => {
        return <Display text="age" displayvalue={age} />;
    }, [age]);

    const memoizedSalaryDisplay = useMemo(() => {
        return <Display text="salary" displayvalue={salary} />;
    }, [salary]);

    return (
        <div>
            {memoizedTitle}
            {memoizedAgeDisplay}
            <Button handleClick={incrementAge}>Update Age</Button>
            {memoizedSalaryDisplay}
            <Button handleClick={incrementSalary}>Update Salary</Button>
        </div>
    );
};

export default Parent;