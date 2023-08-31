interface TalkProps {
  talk: {
    time: string;
    title: string;
    info: string;
    presenter: string;
    resources: string;
  };
}

export const Talk: React.FC<TalkProps> = ({ talk }) => {
  return (
    <>
      <div className="flex flex-col items-center text-xl my-8 px-4 max-w-screen-lg mx-auto">
        <p className="border-b-2 border-text w-full text-3xl">{talk.time}</p>
        <div>
          <h2 className="text-3xl font-bold">{talk.title}</h2>
          <p>
            <span className="font-bold">Presenter: </span>
            {talk.presenter}
          </p>
          <p>
            <span className="font-bold">Info: </span>
            {talk.info}
          </p>
          <p>
            <span className="font-bold">Resources: </span>
            {talk.resources}
          </p>
        </div>
      </div>
    </>
  );
};
