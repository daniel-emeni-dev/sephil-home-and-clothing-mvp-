"use client";

type DeliveryMethod =
  | "standard"
  | "express"
  | "pickup";

type DeliveryMethodProps = {
  value: DeliveryMethod;

  onChange: (
    value: DeliveryMethod
  ) => void;
};

export function DeliveryMethod({
  value,
  onChange,
}: DeliveryMethodProps) {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Delivery Method
      </h2>

      <p
        className="
          mt-2
          text-sm
          text-text-secondary
        "
      >
        Choose how you'd like your order delivered.
      </p>

      <div className="mt-6 space-y-4">

        {/* Standard */}

        <button
          type="button"
          onClick={() =>
            onChange("standard")
          }
          className={`
            w-full
            rounded-xl
            border
            p-4
            text-left
            transition-all
            ${value === "standard"
              ? `
                  border-primary
                  bg-primary/5
                `
              : `
                  border-border
                `
            }
          `}
        >
          <div className="flex items-start gap-3">

            <div
              className={`
                mt-1
                h-5
                w-5
                rounded-full
                border
                flex
                items-center
                justify-center
                ${value === "standard"
                  ? "border-primary"
                  : "border-border"
                }
              `}
            >
              {value === "standard" && (
                <div
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-primary
                  "
                />
              )}
            </div>

            <div>
              <h3 className="font-medium">
                Standard Delivery
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-text-secondary
                "
              >
                2–5 business days
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-text-muted
                "
              >
                Recommended for most orders.
              </p>
            </div>

          </div>
        </button>

        {/* Express */}

        <button
          type="button"
          onClick={() =>
            onChange("express")
          }
          className={`
            w-full
            rounded-xl
            border
            p-4
            text-left
            transition-all
            ${value === "express"
              ? `
                  border-primary
                  bg-primary/5
                `
              : `
                  border-border
                `
            }
          `}
        >
          <div className="flex items-start gap-3">

            <div
              className={`
                mt-1
                h-5
                w-5
                rounded-full
                border
                flex
                items-center
                justify-center
                ${value === "express"
                  ? "border-primary"
                  : "border-border"
                }
              `}
            >
              {value === "express" && (
                <div
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-primary
                  "
                />
              )}
            </div>

            <div>
              <h3 className="font-medium">
                Express Delivery
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-text-secondary
                "
              >
                Same day / Next day
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-text-muted
                "
              >
                Extra delivery charges may apply.
              </p>
            </div>

          </div>
        </button>
        {/* Store Pickup */}

        <button
          type="button"
          onClick={() =>
            onChange("pickup")
          }
          className={`
    w-full
    rounded-xl
    border
    p-4
    text-left
    transition-all
    ${value === "pickup"
              ? `
          border-primary
          bg-primary/5
        `
              : `
          border-border
        `
            }
  `}
        >
          <div className="flex items-start gap-3">

            <div
              className={`
        mt-1
        h-5
        w-5
        rounded-full
        border
        flex
        items-center
        justify-center
        ${value === "pickup"
                  ? "border-primary"
                  : "border-border"
                }
      `}
            >
              {value === "pickup" && (
                <div
                  className="
            h-2.5
            w-2.5
            rounded-full
            bg-primary
          "
                />
              )}
            </div>

            <div>
              <h3 className="font-medium">
                Store Pickup
              </h3>

              <p
                className="
          mt-1
          text-sm
          text-text-secondary
        "
              >
                Pick up your order from our store.
              </p>

              <p
                className="
          mt-1
          text-xs
          text-text-muted
        "
              >
                No delivery fee. Available after your payment has been confirmed.
              </p>
            </div>

          </div>
        </button>

      </div>
    </section>
  );
}