interface TalkProps {
    talk: {
      time: string;
      title: string;
      info?: string;
      presenter?: string;
      resources?: string;
      tags?: string[];
      format?: string;
    };
    hideTime?: boolean;
  }

  export const Talk: React.FC<TalkProps> = ({ talk, hideTime }) => {
    const tags = talk.tags?.filter((t) => t.trim() !== "") ?? [];

    return (
      <>
        <div className={`flex flex-col items-center text-xl px-4 max-w-screen-lg mx-auto w-full ${hideTime ? "mt-2 mb-8" : "my-8"}`}>
          {!hideTime && (
            <p className="border-b-2 border-text w-full text-3xl">{talk.time}</p>
          )}
          <div className="w-full">
            {talk.format && (
              <span className="inline-block px-3 py-1 mb-1 text-sm font-bold tracking-wide uppercase rounded-full bg-secondary text-background">
                {talk.format}
              </span>
            )}
            <h2 className="text-3xl font-bold text-left">{talk.title}</h2>
            {talk.presenter &&
            <p>
              <span className="font-bold">Presenter: </span>
              {talk.presenter}
            </p>
            }
            {tags.length > 0 &&
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary text-text"
                >
                  {tag}
                </span>
              ))}
            </div>
            }
            {talk.info &&
            <p>
              <span className="font-bold">Info: </span>
              {talk.info}
            </p>
            }
            {talk.resources &&
            <a
              href={talk.resources}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-secondary text-background font-bold transition duration-150 hover:brightness-110 hover:-translate-y-1"
            >
              ▶ Watch Recording
            </a>
            }
          </div>
        </div>
      </>
    );
  };
