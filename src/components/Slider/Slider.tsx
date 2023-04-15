import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Types";
import { PriceRange } from "../../redux/Filter.slice";
import { NavSlider } from "./sliderStyles";

export function Slider() {
  const values = useSelector((state: RootState) => state.filter.price.minMax);
  const dispatch = useDispatch();
  const STEP = 1;
  const MIN = 0;
  const MAX = 500;

  return (
    <NavSlider>
      <span>Prix :</span>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => dispatch(PriceRange(values))}
        renderTrack={({
          props,
          children,
        }: {
          props: React.HTMLProps<HTMLDivElement>;
          children: React.ReactNode;
        }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "50%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: [
                    "var(--paleBeige-color)",
                    `var(--caribbean-color)`,
                    "var(--paleBeige-color)",
                  ],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({
          props,
          isDragged,
          index,
        }: {
          props: React.HTMLProps<HTMLDivElement>;
          isDragged: Boolean;
          index: number;
        }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "8px",
              outline: "none",
              border: isDragged && "1px solid white",
              backgroundColor: "var(--caribbean-color)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                fontSize: "12px",
                backgroundColor: "var(--caribbean-color)",
                color: "white",
                padding: "4px",
                borderRadius: "4px",
              }}
              id="output"
            >
              {values[index] + "€"}
            </div>
          </div>
        )}
      />
    </NavSlider>
  );
}
