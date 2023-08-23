import React from "react";
import Image from "next/image";
import "./styles.scss";
import { ClassElement } from "typescript";

type Props = {
  img: string;
  altImg: string;
  title: string;
  note: number;
  props: string;
};

export default function StateComponent({
  img,
  altImg,
  title,
  note,
  props,
}: Props) {
  return (
    <div>
      <div className={`stateContainer ${props}`}>
        <div className="imgText">
          <Image width={20} height={20} src={img} alt={altImg} />
          <p>{title}</p>
        </div>
        <div className="noteStyles">
          <p>{note}/100</p>
        </div>
      </div>
    </div>
  );
}
