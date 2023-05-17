import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Row className="w-100 ps-3">
        <Col className="">
          <Link to="/register">
            <Row className="mb-3">
              <Col className="">
                <img
                  width={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADi0lEQVRoQ+2Zu2sUURTGvzvDCho1+AIRwYCgEAVFwRcWiqBoISjERgULiRiwSGbObMTCtVkkZ7YKilHQJiZiwDpioYWiFtFKwb9AFLELxGaOXJkJm81M9mYeyxoy5dw73zm/+93nXIUl8qglwoFlkHZzMpUj/f39623bviEi92q12q+8oFzXvZ1WMxUIEX0GsBfAF2benQcIEY0CuJhWMy2IRMkzcyqNRngiyqQZm0S5XO4UkYqIHAtbPo9Gz6rxEcDbUqnE1Wr1R6PYPJByuXwkCIJ3WaMW+X0QBLtqtdrX+hhzQPr6+lZ3dHR8A7ClyERy0P4yMzOzf3h4+E+kNQeEiK4AeBIW/haRZwAm5tmo1OvonYgczyExqCaaSqkDInJLKbVWx1NKXR8aGnqQBPIIwNWw8CkzX4pLkoh+AtgE4Dczb8gDxETTdd1JpdSpMN4oM19OAtEtrQc49GD3ff9OXJKe550XEb2OjPi+r13L/AwMDOywbXtkIU29ziilKmGwN8w82xsau5YRSOasUwosgyR1rZQNmvmz1I5kjlyAwKLHSAE55C1pNtjzjlqAnhmInn4LCJ5ZctFda6F1JHM2KQVSD/ZWz1qu6x7zff9NEmfbg/T09NhdXV3jAHoAfGTmQ3EwbQ1SqVRWTE9P623OuSj5uG26LmtbkN7e3lWdnZ3aibN1Dkww84X/xhHP89aEx4QzJhBt6cjg4OC6IAjGRSTakus8E52IQHPvWkQ0AqA3zRTtOM5Gy7L0mDhh6kQhIHqKbDjNJZ5bGvs5EW0GoMfEvzNP+DR1ohAQLUpEHwAcjAKYOON53lbdnZRSR9NAFDJGHMfptizrOYBdJjCO42yzLEs7cTgtRCEgWtQUhoi2AxgDcCALRGEgJjDhOVw7sS8rRKEgC8GIyIRt22MisicPiMJBkmD0z+j6MWSyTsSt5vXvcl9H4gLGjZm8nChs+k1quQQY43WiLRyJkghhHgPYCeBV0gawWdJx5S3pWmkSW+w3yyCtPuo2c8jYEc/zbopINRTUN0R9zPypWYBWlIeL64u6Kf0uM9+MYjf+xD4J4GVdYvoi5X0rEjWIoTepK+vqnWbmyVgQ/ZKINPXs+dkgQMurxO22Yy9Dieg6gPstz9As4ENmvtZYNfFqWZ8fROSwiHSb6RdbSyk1VSqVpqrV6ve4SLnckReLYKa+DGLWTq2rtWQc+Qu79LFRZ28khgAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span className="ps-3">Sign In</span>
                <FontAwesomeIcon className="float-end" icon={faChevronDown} />
              </Col>
            </Row>
          </Link>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB6ElEQVRoQ+2asUoDQRCGZyBPYKeV1r6EPoKgQsBGIYKN1Y1CGrU7bg4uYGvAxiCm8Q2Sh7ASCytLsRNygZGDPTkuF3PLJZtzs6nCMMPONzP7J3t7CJZ80BIOcCB16+TMjniet1OHpMMwHP6Vx1QQIroAgDMA2KwDiIi8AkAvDMObonwKQYioCwAndQAoyOGQmft5+wRIu91ej+P4o6YQSVrvzLw1EyTZE4g4SB1F5LoOUIj4m4eI7Ob3zERHikCmzaUpQM/zrhxIdrRcR+Y0e2608qpVNFqqSqcAMBiPx60oir6TBmTsG7oNEZFuo9Hwfd9/y8YutCNE9AIA22rBO2ZuJd9zdl2WxP+cmW9NgvQAoKkWPGbmewWStWuDIOJeEATPJkGaIrKPiMNsBYkota/pUiBifzQa9TqdzpcxEN0kq/gvdI9USUw31oGUkV/dqlbxdx0p05GMOs1VteI4foyi6NOYahHREwAcqAUvmTlQvyNZu/ZEIeJREAQPDiStQNmDlTWjpT0zFQKcapVRrQoF1g51HVmpjixKtYz/jSciaw5Wdhx1rXn4oK2hFQKc/K6U/FaYFO1QN1pWXPRYc/Wmjqv//zI03YlWXE/nDv7/+4UBbY1ccsDMVziWnF/p5R1I6VIZcvwBChr8Ue16BMAAAAAASUVORK5CYII="
                alt=""
              />
              <span className="ps-3">Orders</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEMUlEQVRoQ+1ZXYgbVRT+zoSQpVtFfBHqCorgikJRXwoVoT4o+tBiH1pBfLD+IasRJfeMsBQ2FczuzpndQAsLSpGCCGJfSvdBqEIXEX/oi/qgtqC0FFZELIKLP2ySU6ZNlsnsJDOTmYm65EIecu/5+b57ztxz7gxhiwzaIjwwIvJfi2TqiDDznaq6E4D3AxFdFpF3+xFl5mdV9ba2/LlCofDd3NzcxTSbMzCRqamp7ePj4wLgpRAApwAcEZGv/WvMfB+AGQBPhOgsNxqNZ+r1+pVBCA1EpFKp3G1Z1vcRDn8H8KKInPTkmPkAgHcA3NRPr1gs7qjVaj8nJTMQEWb+AcBkHGeq+nA7hc7GkQewIiLXdJKMxESMMTNEVA1xsgJgT495b7rX2qZ5Va26rnskVyLM/CEAL002RrPZnFxcXLxgjNlFRF/GARChsywi++LY6cgkjggzXwYw4XPiiMgbnf+2bVdU1Y0AEaWzKiK35krEGHOeiO7qOAmmQZ/U28AVQ+eiiNyRKxHbtuuq+lrAySEROdE+mbzUizP66ZwQkUNxjPRNLWPMHiJ6HsDjAG5OYjBH2V9V9bRlWWcdx3k/6GfTM8LMpwHszRFQFqY3RayLSJJTJws0KW3c7+8cuogw8+sAFlM66FInok9V9W8Aj2ZpN3hgBIl41ddfoFZU1St0sUZIofwJwIOtVqthWdZnwW7AAxPL8PVm1MPVhc3fAUQSidMu2LY9oapfAdjhA/YPEe11HOdjb46ZHwJwBsCYT+ZSsVjcVavVfokixMybNjlzIsz8EYDH/GBardbLCwsLS/45Zi4DOBoAfVJEDv7rRJh5HoAdAHJcRF4IA8fMHwB4MrDGItK3G8g1IsaYp4noPT8oIrpQKBR2z87O/hZGZHp6+pb19fVzAK5drDpDVfe5rrvcKzK5ETHG7CQir4p3tfOq+ojrup/0S5UeHcC3RHTQcZzzPSKZzzMS1gWr6mHXdd+Kyndv3RhzjIheifu85BaRNpinALxNRNsBfCEiu+OQ6Mgw8zftu75XZ2ZExBl6avnAPEBEbzabTe+UupSEiG3bk6p6lIjmHMfpe4PMNSId0NVqdVu1Wv0zCYmOrG3bNziO80eU7lCIRIHIYn1EpL2LA73RyCICQRupI5KkacyDQMdm2qYxT2xpbXdlS1T3m9ZZnvojInnu7iC2RxEZZNfy1EkUka1TR+Lc2fPcdl9zms99ZBjg/T5SV/b/a0SC3z5iv9MaUoT877VOicj+jRbGD8AY8xwRHR8SqLRuXhWRY6FEyuXyjWNjY6sAxtN6yVn/SqPRmKjX63+FEvEmK5XKPZZleSl2b85gBjW/alnWgfn5+c/9BkI/vZXL5VKpVNpPRLeramlQj1nqWZblXaV/XFtbO7O0tLQWtJ34G2KW4LK0NSKS5W5mYWvLROQqDqopUSkA7bQAAAAASUVORK5CYII="
                alt=""
              />
              <span className="ps-3">Promotion</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wNy0yM1QxNDozMTozNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDctMjhUMTM6MzE6MjErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDctMjhUMTM6MzE6MjErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzNmNGMxMGQtYmI1OS0xYTRkLTk2ZjgtM2U1MTUxMzM3YTlmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczZjRjMTBkLWJiNTktMWE0ZC05NmY4LTNlNTE1MTMzN2E5ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjczZjRjMTBkLWJiNTktMWE0ZC05NmY4LTNlNTE1MTMzN2E5ZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzNmNGMxMGQtYmI1OS0xYTRkLTk2ZjgtM2U1MTUxMzM3YTlmIiBzdEV2dDp3aGVuPSIyMDIwLTA3LTIzVDE0OjMxOjM1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpeylawAAAaVSURBVGiBvZprbFvlGcd/z7F97JCEtlnDQkIvi2giNnGNUGGMUW0QBBtFAcQgTEPdxto4DSIUSM34kA+odYpQt7QxpKISUNFdWgaVgHbTKIVxK2ydpq4ZLQWqtF0bmrq4xLHjy3n3wUl37NqJzzlO/1LkvM953+f//P3en2NRSjEBEaFk6Ovxo6lmNB5k6crB0jn+P8yxu6eDgGfXLEAZT6PwYVAB3DgtPCZo0+JVqVYUvsz//JBnelZMC48J0yWkJatsqC761144LVzjKP3QCvUsBnV5lk2oJhV/AminPzgDg1YMdT1IE0IDyAb8XUud0NoTEgq+BTQBA4hsR2Qzyx77NBO0ehKVp42In77gjaRpGC+bHqoGW3GY3dtatULBo0BtjnUXiu8gVFuOwjB+xPLH37DazBy73TmyN49tkS0RIt12ROTCnhBRa5wSj+O/aPqGUjiyJ6QtsBPhFcfsIhtY2nnMsR+cLL9KAiCHHXCXrDfAiRB/136EgAPuf5SqN8DphtjW9RLwG5uthx1x58D5zl4WDwDvWm+ojjvmNsG5kCXdcVC9FlsdR7Qxx9wm2NsQ8yEUXAssAq4wWUdBnQQZBo4AH6G0j5D0x/gDp+yTZZAV+7TdR84BSnsfCQV7ERYBm9HYPOUlqq+7AnyXIfJjlNGCyCeMxZfQ2f2VkzCc9Ugo+GegOcf6LiJ/PauuUvXApeN/2V+gsBeRTpZ1vWmFvjRDqy94HOGbVoinQAqRFbR1Fb1wOBPS230+bl/EWowWIPSjfd7B0g3JqaraF9LbcxFu5eRYUhyUegPd+DkP/Hpo8mp2hPT1XIKoAedRFo0DaEYLyx4vyGn9PrJ+1cJzLAKgAUPbR1/we8VUnlrI+lUL0bQPHYdlF8LfCPU8NGW1SYdWf3AuKT5Dpin/ZQ0P4l+5zmwobo78sVvnhO8dhIWW6JQBYzEwJqkjbvB5M+MhX6KisPO78Qe2nCkVJSQUfAp4xAoNSkHaYG7NPObrhReOcleK3UNDhGMpcFk6t36OpL5P2xNHM3RTHVHWrV6EVRFkRMxv/AFfNF8zedXIHhq3HCJsuMFliaQe3Mvh7Atd/h4JBXcAN1uiQIES5sy7jPuqdEaTSdxllXz3W03cOdsHpHnv0B42fRFm/5EBdp38Grw+LI4tgBE090KWPTIw+dAKrboftOetej+DWARiCTAM0L0wq46WG1r4U+OFDPx7O5dveo1UTR2UeTPzyRbUs/gDbVMIWb0NZLEt/+k0FVX1bGxezE2VLpQyiCVixDwVXFymA5CIjzIU3stNf9nJ/ogC3drYGkcEXa9Xv+gMTxiyZ1p/8FLbIlAgGhfVLaDBnSA8FmM4HuXYaJRIavybN9J8HRvlzYOfMXh6DDy2RADMIJm8xWzInuyG3GFjzI5DwAWf/OtlrnxrJLP8emdSVltH63W381xlDeHDH3DVC9sYnDULPOdhnwuAVuCliULOqqXmO/FMWnFeeRO/uvYCZqaFGeXV3NzYyCU6wFc8vfefDM6YBW4XDkWAUreai9lClCywT6AgpTjfdyVrr6432dN8emSA3/79AzYeCoOvLLPfFISBnZxIbotGyx7OQMBlMBzfTf/wRIJkhP6dW7nu5a30HTxKXPcVIaLGFnuOEFVuy8sEXC5S0QN07niVTZEUUMFPrmji1uqqzPMp720G8G1b1LlCwvmrFQsBj5fY0D4e2LaFzSNJZlZdzPO330XH3GoYiYI2mRoBThRLlpVOyhGinbQSdsFgyssZ+3IfS7Zu4fenk1BeR+9td9ExZzZEoqAVmgMuYE+xPFkJjhL3yIQboLKSxPAAP3t1K787lYSyGnpbWlk+5xtweiTn1ZsZ3mJJ3jaXsoWIPGc96gIwgIpKkif+w/2vv8KLw2Pgnc26O++lY94FMBpz5l/k46xi1hFl49oqEolDQKUzFjMUJJK4K6uo1TV8Hp34aITB6JjVI7wZu/GvvKbwnf2XD4cR9YL9oPNBQPeQip5iMDzMgaFjDMYS4HaQPxdZl2s625uhr4FSp3wE3B7w6ODxZOaH/Y19+/h7mSycLaR9xWGUVqqXnaXGCIon8z3I37/tXetR6h6ESRNk5xxpdRvtK9/P96jwQG0P/AGVbgYp2QtLB9iPx1VPR2BXoQrFZRpDq5tAfgpcT+anG+cKB4HtRF0BHn00mvvQWRK7v3s2Ke9ViFaHohaNWgxVh1CLIvNpD6eA48AQig9BvU17YMdkDcyx/w8HL3OqkQG2xwAAAABJRU5ErkJggg=="
                alt=""
              />
              <span className="ps-3">Red Envelope</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfElEQVRoQ+2av4vUQBTHv29hS8EflYjddTbC2Vh5lorbCAqizaF/gEomgs3dtftmtUgpiJUIFhZ6tVtcYSGChVrZXCHaWAjCLgvzJOLCbnayySSTmLtN2sx77/t572UyMwnhkFx0SDjQgjStkqtREaXUWRE5+j+zPx6PP0RR9CtLg7UiYRhuGmMeEtFaloOa7r8GcI+Zv6bFWwBRSr0FsFGTQKcwxpgzg8Hgs81oDiQIgi0i2nbyXu/gT6PRaD2KonEy7ByIUuoJgDv1anOOtmZrsSRIY9tqiisiF7XWw6yKtCALGSL6ISL7AH47N88SAxHZqbMiPWZ+4xMgy5f3Z2TZFJklpsx9ryAisq213ikjqKitb5AbWusXRcWUsfMNMjc1BkGwQURbZQSm2YrIcLb6dYDEU7r3K9nGLYgtxcm37r/WaiuyrB/b1srztBZord5kMtnrdrsnROSWyxaiMRWxrQCUUlcAxLvBzKspIM+YedOmNgiCfSI6nUXSFJA+Mz+wiVVKvQewflBAXjHz1RSQnwCOHRSQWOd1Zn45K9jlzKAprfVXfyym0+l8BHBERHoArmVVYnq/USB5RaesIua2DO1aq11rlemnGdv2GcmTSNtaC8CFPLZFxlS2QwRwm5mfFhFV1sbrrAXgOTPfLCuqiL1vEOsbu4gwV5sqQKZv7F1jzBettdcj0zTASkBcs+kyfuVO43cBXHbJUN1jieh8v99/l4ybbK1H8UfHusU5xjvJzN+zQHLvmR2D+xr+mJnv25wtfNV12dz4UpfTzzdmPpVr1poOCsPwnIjcBXAJwPGcgaoaNkweWOeqSFVqqva7Gv+iVJ1Fn/7/AEvxCVHd7ZIcAAAAAElFTkSuQmCC"
                alt=""
              />
              <span className="ps-3">Wallet</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABaElEQVRoQ+1ZO07DQBCdOQhSLkEfLkCfjgopBZ1HchnqWblIBRWpcgFaJLhIquQYlidyFEfGARPLO/aymW29fm/fvNnfLEIkDSPRASYkNCfNEXNEKQI/plaappM8zydKnL1gi6LYZFm2bYKcCSGiJQA89WLT//mdme/rNN+EENEjALzqj6M/g4gsnHPPFVJTyBsAPBw/fvWnU0GYHlF3zHzzm5BPADh0FJE751xQYpIkmSJiOcZDY+aTEU1HTIhKEjVAr96RxRBR7sqBiKdxXTRHuhKM0d+EjBH1Nk5z5L86EtSuXgtidUSxnX30zLr6nd1Ov1o5aKmlfbEiojUi3rY5KCIfzDwv+wTrSCkEAGZ/pOKLCRnqzm6OhFZ8iMmRqobWOt+ZeRX0qtV14wx2+TUhoU12TUfqReyuPEP3by1ix/GsUIY0ioeeKjeieHobOtF98dk7u69I+sIxR3xF0heOOeIrkr5w9v4wfUJPH/TeAAAAAElFTkSuQmCC"
                alt=""
              />
              <span className="ps-3">Bank Card</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />  
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADGElEQVRoQ+2aPWgUQRTH/28TsDGFQiqbxI9CAxYqRGxMGiFga6WFwY9A1GpnwqUQY5WQma3UgF+YQhtrIWBjbMSACgpqoeI1VgGb2EiSeTLqhctm9tydu13ucKedNx+/+b95M/N2CS0qUsrbAE4A6EvZZRXAU6XUWEr7hmbUik6EENeIaMqnL2ae0lpf92lb36ZpkEql0re+vv61mYl0dXX1z8zMWIW8S9MgQoghInrmPQMAzDystV5spo8SpLZ6CYqMKaXuuFZYSnkRgA0MG6VdFfmilNrbyE2klJ8B7KnZtCuI9fmjWuslF4wQYpCIXnaCIrU5Jm3eoThg2yqSNfqUIHUrVobff4TfTN7Vzq4VMfMTFw0RnQQQdkLUWu7u7h6Ynp5edoFMTk72rq2tvQfQ29bnCDN/C4Jg/+zs7IoLZGJioscY85GIduUOUqlUdqyuru4mop40zu64ND5k5vsJrnUOwJncXauZt0UaaJdNyze7lPIUgMe+E/JtlweIhbAwhZY8QOwDactdKG+qEiTpiiKldCnyHcACM3+KK0NE+wCMANgZq1ti5oWEqGXtB3ONWi4QZp7TWl9Kci8hxC0iGq+r/wngmFLqjauNlPIQgBcAtuV2jiQoMqqUmk8CkVKeBfCgrr6qlOpvtK+klDbrspH/KmqPVJnZgjx3TO44EVmQeFLuETPfS3Ct8wBOewaQFSJ6a4y5Gs+6bLrGJyjiOWa+zYwxA1EUfaiN0rEg9gqktbbq/i4dCwJgUSk1XILk6/mZev9/Fcn9ZAfgM0Y2RQo62bPeHqwPZgMBkPvJ7jGGF0gRJ7vPGJkVyRRKCjQuQQpc7FRDlYqkWqYCjQpTJPWHHk/4/EGMMUeiKHrtmmAYhoeDIHjlOfn6ZrmDbBog4d3eirRTCZLWG0pF0q7UX7tk1xJC3CCiyxk7jJsXoggz39RaX3E+dVvxgwyAeaXUaKPFkFLaPJhNI3mXeC5sy1fdMAwPENHdIAgOMvP2jCNVjTHjURQ506W1vsIwHAmCYC7DT2p/MiVEP4wx75j5Qn0qyNb9AvxLOVFLLAVxAAAAAElFTkSuQmCC"
                alt=""
              />
              <span className="ps-3">Address</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />  
            </Col>
          </Row>
           <Row className="mb-3">
            <Col>
                <img
                    width={30}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEbUlEQVRoQ+2aTWgkVRDH/0UCzuYQvehF1IN68QuRXUFcP+NBXBe/RfADQQ0GjOsk7z0UD44g6HS9STJMZDWrB9GDqCuKJnhZ8WPFg4u4rnpZ9+B6cz1oDmGEJCUvdEtn7On3umeUEOYd86rqX79XXd013SFsk0XbhAMDkJBKKqXuI6J9zlZEmtbat0P8ytj0vSLj4+Mjo6Oj+4joKQBndST1m4jMLS8vNxcWFlbKJNzNp28g09PTF7nkieixkARF5ICDajQaP4XY+2x6BlFK7SGiKoAxn1iX/UMiMmutXSzpv+FWGkQp9QQRaQDnehJYAnBLQJInRYSttfMBtv8yKQQyNTV1ztDQ0DSAjQbOW0R0gIhertfrR7XW4rPv2G+ura01ZmZmfg31CwLRWl8HwASc7O8iMr+6utqcm5v7I0miBEji6qoZMfPnPqBcEK31ozHAhXmBROQoEc0z82tZdj2AJOGOx0CZ8XN7JFB8SUQa1tpP80ADY/kOfWOfmTMPv2tFPOL719fX641G45cQ9a0GcoqI6lEUNUKST9tsKRARucFa+1lRCGc/AMk4tZ57ZFCRwaWV3Y2DSys5l0GPDHpk0CObT0Br7cbw07dYj/zJzGdk1SpvaHQD4T+//kSkVmY86dWHiNK6J5n5vKIg3wO4tNdE8kZvX2xjzP0i8lbK7hgzX1YIRCn1JRHt9omF7Hd7iPl8lVLPpSsiIoettdcUBdkUxCeat18WRGv9PoA7Un1as9Y+XwjEGLNTRL7pBSDxLQOitT4fwDEAO5I4RLQriqIjhUDi3xE/ALi4V5gyIEqpZ4nohZT2j8x8SbdcfC8f5kJe/fhAy4BorV010ok3mdm9hs1cPpCrARz2JerbLwqitX4IwBsdcXcz81elQOLL6wMAt/mS7Weza60PAbgxFfNDZr49T8P7gk5rfQ+Ad/4vEGPMnSJysEPvXmZ+tyeQuCru7rWzLEzopaWUcg+7JSI6O6V1hJl3+bS9FYlBbgXwkS9Yt/0QkGq1umN4eNi9Ir2+I85eZv7Ypx0EEsO8COBpX8Cs/RAQrfWrAMY7/F9i5mdCNINBarXa8MrKivuWcW1I4LSND6RzFHG+RPTFyMjIWK1WWw3RCwZxwZRSVwH4hIhGQ4InNnkgxphZEdn0fBCRZQA3W2u/DtUpBBLDPEBEb4YKOLtuIFprdzd0d8VNS0QetNamp16vXGGQGMZ9K5z1Ro8NOkGUUjcBeJKI9mZAVK21bqIotEqBOAVjzOMisj9ELQExxlwpIhMAHs7yI6KJKIpeCYnZaVMaxAXSWl8O4D0AblLtukSkSkRuOui8tSY+JwDczczflYFwPj2BuACTk5NnVioVV5m7SiZxsN1uT7RarVMl/TfcegZJxJVS7ibgPlNfEZjQt/Fn6UJN3S1230Di6pxWqVSqIvIIEV2QJSoiPxPR6+12e7bVav0VCO016ytIWs0YMyYi7p8J9ri/i8giES1GUeQm276v/wyk75l6Am4bkL8BJdARUQFzPqAAAAAASUVORK5CYII="
                    alt=""
                />
                <span className="ps-3">Account Security</span>
                <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
                <img
                    width={30}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABYklEQVRoQ+3a3RGCMAwA4HQJh9AldAmf6SSek5Rnl9AldAiXqJcT7zi1JW0S4CC8eRd+voQWGnSwkM0txAEG6VfSe3/lVDaEcODsj/uKVKSD7Csv5maQXuasIn/GiN1aNkZsjCTmV5t+34mx50j/BrHniD1HficMGyOkMeK938YYN5Q3WufcCQCqX1FijGfieZ4hhMe/2OxgRwwAXABgRzmRYswdAI4pBGk9MgPMIIIEwaAJMSQEGTIRhowogoyMKUIUQ0bCFCOqIMqYKkQ1RAlTjWBBhDEsBBsihGEjRCBMjAhCDFKJEUOIQgoxoghxCBEjjlCBDGBUEGqQBEYNoQr5wuDP7HoCAzibSBcldwHdEgByiyIO4LOvOkTiIinHMAglS2PGrKMiTdNgm2c2W9u2ybbRUDsIPzvX9qukE5DtSBpEOt2E41lFsDHH+msGIctFIbmvv+uYfovSNXHwYiryAhi53DPcFIGeAAAAAElFTkSuQmCC"
                    alt
                />
                <span className="ps-3">App Download</span>
                <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <img
                width={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACOUlEQVRoQ+2aMWzTQBSG3ztLWVmpGJEYysgEU9lZGGAqEy4LEgO+mzK0LEl0d6aDJQZEp26txEA3pkx0YiwbEkOlVurUsiRD7qFUDG1yjRv71bGry5z3v/97/50vtoNwSz54SzgggNQtyZBI4xJRSt0djUZLQog7izDvnDuNoujIGHM8q/+VSytJkkdCCAsAK4sA8PTsO+dkmqY/fX68IFLKx4j4oyYAl2wQ0RNr7f6kNy+IUmoHAF7UEQQAdo0xL3NBkiRZFkIc1BTi3JZz7mGapr8uepxKREr5GhG/1BmEiGJr7VYeyDoibtQcZMNa+yGA1CUlIgqJ1CWMcx+siYzFWq3W506nc8RFqZR6Q0QJIj6YpckG4hNihHkGAHtVgTy11va5zE/qKKWoKpCpqwYXlJTyOSJ+rQRk3AQRV6Mo+t7tdk84INrt9r3hcBgj4isAuF8ZCIf5ohpsm72oAa66AMI1SS4d1kTCgZgTi1IqHIiXZiSlzL2xusmfKIs4ED8KIbJer/eHYxOHA/H/FH0PH3KXFkcCZTRYL79ljJStDSBlJ8hdHxLhnmhZPSKaukNt4lXrEBGXtdZ/Lw6kiSDvjTGbk6k2DSQzxrzzLc0mgBwCwD4i7mmtt6/aX/OCnCBirLX+VnbDctfPA3JARGu+117cporoXRdk/DAuNsb8LtKkiprrgOwOBoM4y7KzKgwV7TEThIg+WWvfFhWvss4HsoKI60TUn3y9VaWxeXuF/6LMO7Gb/v4/Av6hQgwN1SIAAAAASUVORK5CYII="
                alt=""
              />
              <span className="ps-3">Complaints &amp; Suggestions</span>
              <FontAwesomeIcon className="float-end" icon={faChevronDown} />  
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className=" ">
                <img
                    width={30}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACNUlEQVRoQ+2aMYgaQRSG33PLtUqZwkauCimEFOelyRXCtaYISJokpUUOwdXS2OnOgFwK26RJhFjYBixyzcVrDuGOdCeIhDSBVG4T0HfswnGnt+uuG28yIzP17Lz/+9//BhlE2JKFW8IBGkS2TuqOKNeRUqn0wDCMA0R8DAC7ggFOiehiNpt9bbVaf1bVXhmtSqXykohsAHgoGGC53C9ErNi2/SlIRyBItVrdm8/nJ/8ZYKF8IpF42mw2v/tp8gUpFotJ0zRPAeCRTCAA8MNxnN12uz1d1uULYlnWKwD4IBnEtZzXjLGPkUDK5fIRIr6VEYSI3nPODyOBWJb1DQCeyQgCAMeMsX3hIOl02qs5Go025Yt4kHw+D9ls1gMYDAbQ6/U2ASMepFargWmannjHcaBer6sJUigUIJPJeOKHwyF0Oh01QVzVuVzOE9/v9zcB4Z4hPlqbUr50jgaJZaw75MlkcuHb6XTqDf0/LrEdcUHcW+v2cm8tDXLjiO5IrEjraIXbpqMV7pHPDh2tcNt0tMI90tGK5ZH4aKVSqQWlk8lEvZ8osbyO9pHYjkTTFGuXBoll2319RETvOOd3XjGCnkylfaAjouec8zvvSqqBnDHGnvh1WykQwzB2Go3GpcogfUR8Y9v2z6DZW7cjx/c1xH7nEtE5Ig7H4/Hnbrf7d1XtdUC6jLEXIkHWqRUVRGoIFzgKiPQQUUCUgAgD+S3zTCzPT1C0vqgEEdiRdW4LWfZuzZ9qrgC4511CCe5B/QAAAABJRU5ErkJggg=="
                    alt=""
                />
                <span className="ps-3">About</span>
                <FontAwesomeIcon className="float-end" icon={faChevronDown} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='text-center '>
          <Col>
              <Link to="/login" className='text-decoration-none text-white w-50 rounded-0 pt-2 pb-2 border-0 shadow mb-3 mt-3' type="button" style={{background:"grey"}}>
                  Logout
              </Link>
          </Col>
      </Row>
    </>
  );
};

export default Profile;
