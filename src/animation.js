export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
        // scale: 0.1,
        // rotate: 90,
    },
    show: {
        opacity: 1,
        y: 0,
        // scale: 1,
        // rotate: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        // y: 300,
        // rotate:-90,
        transition: {
            duration: 0.5,
        },
    },
}

export const TitleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {duration: 1, ease: "easeOut"}
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        // scale: 2,
        transition: {
            ease: "easeOut",
            duration: 1,
        }
    }
}

export const photoAnim = {
    hidden: {
        opacity: 0,
        scale: 1.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const lineAnim = {
    hidden: {
        // opacity: 0,
        width: '0%',
    },
    show: {
        width: '100%',
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
}

export const slider = {
    hidden: {
        x: '-140%',
        skew: '45deg',
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.1,
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        }
    }
}
