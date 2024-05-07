
const StepCard = () => {
    return (
        <div className="px-9 py-11 border border-dark-5 rounded-lg text-center">
            <div className="bg-red inline-block p-4 bg-opacity-30 rounded-full mb-5">
                <div className="bg-red inline-block p-6 rounded-full">
                    <h2 className="text-xl text-white font-bold">01</h2>
                </div>
            </div>
            <h2 className="text-dark-1 font-bold text-xl">Step One</h2>
            <p className="text-dark-3 pt-5">It uses a dictionary of over 200 .</p>
        </div>
    );
};

export default StepCard;