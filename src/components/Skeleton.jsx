import classNames from "classnames";

export const Skeleton = ({times,className}) => {

    const outer=classNames(
        "relative","overflow-hidden","bg-gray-200","rounded","mb-2.5",className
    );
    const inner=classNames(
        "absolute","animate-shimmer","inset-0","-translate-x-full","bg-gradient-to-r","from-gray-200","via-white","to-gray-200"
    );

    const boxes=Array(times).fill(0).map((_,i)=>{
        return <div key={i} className={outer}>
                    <div className={inner} />
                </div>
    });

    return boxes;

};
