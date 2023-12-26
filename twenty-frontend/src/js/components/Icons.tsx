import React from "react";

type IconProps = {
  onClick: (e: React.MouseEvent) => void;
  title?: string;
};

export function TrashIcon({ onClick, title }: IconProps) {
  return (
    <svg
      height="512"
      viewBox="0 0 128 128"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      onClick={e => onClick(e)}
      className="trash icon"
      aria-labelledby="trash-icon-title"
    >
      <title id="trash-icon-title">{title}</title>
      <g>
        <path d="m95.331 27.471h-14.248v-4.516a5.712 5.712 0 0 0 -5.7-5.7h-22.762a5.712 5.712 0 0 0 -5.705 5.7v4.516h-14.248a5.425 5.425 0 0 0 -5.419 5.419v5.857a5.426 5.426 0 0 0 5.419 5.419h.071v59.041a7.551 7.551 0 0 0 7.542 7.543h47.437a7.551 7.551 0 0 0 7.542-7.543v-59.041h.071a5.425 5.425 0 0 0 5.418-5.419v-5.857a5.424 5.424 0 0 0 -5.418-5.419zm-44.915-4.516a2.207 2.207 0 0 1 2.205-2.2h22.757a2.207 2.207 0 0 1 2.2 2.2v4.516h-27.162zm41.344 80.252a4.047 4.047 0 0 1 -4.042 4.043h-47.437a4.047 4.047 0 0 1 -4.042-4.043v-59.041h55.521zm5.489-64.46a1.92 1.92 0 0 1 -1.918 1.919h-62.663a1.921 1.921 0 0 1 -1.919-1.919v-5.857a1.921 1.921 0 0 1 1.919-1.919h62.663a1.92 1.92 0 0 1 1.918 1.919z" />
        <path d="m64 95.541a1.749 1.749 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 1 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
        <path d="m79.333 95.541a1.75 1.75 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 0 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
        <path d="m48.666 95.541a1.75 1.75 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 0 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
      </g>
    </svg>
  );
}

export function DoneIcon({ onClick, title }: IconProps) {
  return (
    <svg
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={e => onClick(e)}
      className="done icon"
      aria-labelledby="complete-icon-title"
    >
      <title id="complete-icon-title">{title}</title>
      <switch>
        <g>
          <path
            d="m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.3 7.6-4.6 6c-.2.2-.5.4-.8.4s-.6-.1-.8-.4l-2.4-3.1c-.3-.4-.3-1.1.2-1.4s1.1-.3 1.4.2l1.6 2.1 3.8-5c.3-.4 1-.5 1.4-.2.5.3.5.9.2 1.4z"
            fill="#02bc7d"
          />
        </g>
      </switch>
    </svg>
  );
}
