interface TalkProps {
    talk: {
      time: string;
      title: string;
      info?: string;
      presenter?: string;
      link?: string;
    };
  }
  
  export const Talk: React.FC<TalkProps> = ({ talk }) => {
    return (
      <>
        <div className="flex flex-col items-center text-xl my-8 px-4 max-w-screen-lg mx-auto w-full">
          <p className="border-b-2 border-text w-full text-3xl">{talk.time}</p>
          <div className="w-full">
            <h2 className="text-3xl font-bold text-left">{talk.title}</h2>
            {talk.presenter &&
            <p>
              <span className="font-bold">Presenter: </span>
              {talk.presenter}
            </p>
            }
            {talk.info &&
            <p>
              <span className="font-bold">Info: </span>
              {talk.info}
            </p>
            }
            {talk.link &&
            <p>
                <a href={talk.link}
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2">
                <span className="font-bold">Resources: </span>
                    {talk.link}
                </a>
            </p>
            }
          </div>
        </div>
      </>
    );
  };
  