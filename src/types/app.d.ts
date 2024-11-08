/// <reference types="nativewind/types" />

interface IProfileLink {
    title: string;
    onPress: () => void;
    icon: { element: React.JSX, props: object };
};

interface IWelcome {
    image: any;
    title: string;
    description: string;
};

interface IBarProps {
    current: boolean;
};

interface ISectionLink {
    title: string;
    links: IProfileLink[];
};


interface ISectionProps {
    title: string;
    alt?: React.ReactNode;
    titleClassName?: string;
    headerClassName?: string;
    wrapperClassName?: string;
    children?: React.ReactNode;
    containerClassName?: string;
};

interface IndicatePropsType {
    index: number;
    length: number;
    className?: string;
};

interface IUserContext {
    user?: IUser;
    signin: () => void;
    signup: () => void;
    signout: () => void;
}