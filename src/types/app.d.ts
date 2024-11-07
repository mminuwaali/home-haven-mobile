/// <reference types="nativewind/types" />

interface ProfileLinkType {
    title: string;
    onPress: () => void;
    icon: () => JSX.Element;
};

interface WelcomeType {
    image: any;
    title: string;
    description: string;
};

interface BarPropsType {
    current: boolean;
};

interface SectionPropsType {
    title: string;
    titleClassName?: string;
    headerClassName?: string;
    wrapperClassName?: string;
    children: React.ReactNode;
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