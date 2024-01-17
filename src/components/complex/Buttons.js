import styled from "styled-components";

const StyledButton = styled.div`
  float: left;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  cursor: pointer;
  .label {
    padding: 10px 30px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 12px;
    font-weight: 600;
    display: inline-block;
    z-index: 10;
    position: relative;
    white-space: nowrap;
    line-height: 24px;
    transition: all 0.225s;
    transition-delay: 0.45s;
    letter-spacing: 1.5px;
  }

  &.button-start {
    .label {
      padding: 12px 65px;
    }
  }

  .icon2 {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.225s;
    transform: skew(-40deg, 0deg) scaleX(1);
    background: rgba(${({ theme }) => theme.colors.heading}, 0.8);
    transition-delay: 0.45s;
  }

  .icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.225s;
    transform: scale(0.9) skew(0deg, 0deg);
    transition-delay: 0.15s;

    &:before,
    &:after {
      width: 60px;
      opacity: 0;
      content: "";
      height: 1px;
      position: absolute;
      display: block;
      background: ${({ theme }) => theme.colors.heading};;
      transition: all 0.375s;
      transition-delay: 0.3s;
    }
    &:before {
      top: 0;
      left: calc(50% - 30px);
    }
    &:after {
      bottom: 0;
      right: calc(50% - 30px);
    }
    span {
      &:before,
      &:after {
        height: 0;
        transition-delay: 0s;
        content: "";
        background: ${({ theme }) => theme.colors.heading};;
        position: absolute;
        display: block;
        width: 2px;
        transition: all 0.225s;
      }
      &:before {
        left: 0;
        top: 0;
      }
      &:after {
        right: 0;
        bottom: 0;
      }
    }
  }
  &:hover {
    .icon {
      transform: skew(-40deg, 0deg);

      &:before,
      &:after {
        transition-delay: 0s;
        width: 30px;
        opacity: 1;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }

      span {
        &:before,
        &:after {
          height: 30px;
          transition-delay: 0.45s;
        }
      }
    }
    .icon2 {
      transform: skew(-40deg, 0deg) scaleX(0.2);
      background: transparent;
      transition-delay: 0s;
      opacity: 0;
    }
  }

  &.blue {
    .label {
        color: ${({ theme }) => theme.colors.background};
      }
    &:hover {
      .label {
        color: ${({ theme }) => theme.colors.heading};
        transition-delay: 0s;
      }
    }
    .icon2 {
      background: ${({ theme }) => theme.colors.heading};;
    }
    .icon {
      &:before,
      &:after {
        background: ${({ theme }) => theme.colors.heading};;
      }
      span {
        &:before,
        &:after {
          background: ${({ theme }) => theme.colors.heading};
        }
      }
    }
  }
  &.secondary {
    .label {
      color: ${({ theme }) => theme.colors.accent};
    }
    &:hover {
      .label {
        color: ${({ theme }) => theme.colors.secondary};
        transition-delay: 0s;
      }
    }
    .icon2 {
      background: ${({ theme }) => theme.colors.secondary};
    }
    .icon {
      &:before,
      &:after {
        background: ${({ theme }) => theme.colors.secondary};
      }
      span {
        &:before,
        &:after {
          background: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
  &.labelblue {
    .label {
      color: ${({ theme }) => theme.colors.heading};;
    }
  }
  &.labelgray {
    .label {
      color: #1d1d1d;
    }
  }
  &.transparent {
    float: none;
    display: inline-block;
    -webkit-transform: translateZ(0px);
    transform: translateZ(0px);

    .label {
      color: #fff;
      transition-delay: 0s;
    }
    .icon2 {
      background: transparent;
    }
    .icon {
      transform: scale(1) skew(10deg, 0deg);

      &:before,
      &:after {
        background: #fff;
      }
      span {
        &:before,
        &:after {
          background: #fff;
        }
      }
    }
    &:hover {
      .icon {
        transform: scale(1) skew(-40deg, 0deg);
      }
    }
  }
`;

const Button = ({ classes, children, onClick }) => {
  return (
    <StyledButton className={classes} onClick={onClick}>
      <span className="label">{children}</span>
      <span className="icon">
        <span></span>
      </span>
      <span className="icon2"></span>
    </StyledButton>
  );
};

export default Button;
