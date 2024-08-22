import { SVGProps } from "react";

export const ProjectsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 512 512"
      aria-label="Projects"
      className={`w-6 h-6 md:w-10 md:h-10`}
      {...props}
    >
      <g>
        <path
          style={{ fill: "#724530" }}
          d="M52.966,503.172h406.069c29.255,0,52.966-23.711,52.966-52.966H0 C0,479.462,23.711,503.172,52.966,503.172"
        />
        <g>
          <polygon
            style={{ fill: "#BFA380" }}
            points="79.448,247.172 132.414,247.172 132.414,176.552 79.448,176.552"
          />
          <polygon
            style={{ fill: "#BFA380" }}
            points="379.586,247.172 432.552,247.172 432.552,176.552 379.586,176.552"
          />
        </g>
        <path
          style={{ fill: "#724530" }}
          d="M459.034,97.103H52.966C23.711,97.103,0,120.814,0,150.069v17.655l79.448,32.874v-24.046h52.966 v45.965L256,273.655l123.586-51.138v-45.965h52.966v24.046L512,167.724v-17.655C512,120.814,488.289,97.103,459.034,97.103"
        />
        <polygon
          style={{ fill: "#562F1F" }}
          points="512,450.207 512,167.724 432.552,200.598 432.552,247.172 379.586,247.172 379.586,222.517 256,273.655 132.414,222.517 132.414,247.172 79.448,247.172 79.448,200.598 0,167.724 0,450.207"
        />
        <g>
          <polygon
            style={{ fill: "#CCD0D2" }}
            points="132.414,97.103 185.379,97.103 185.379,70.621 132.414,70.621"
          />
          <polygon
            style={{ fill: "#CCD0D2" }}
            points="326.621,97.103 379.586,97.103 379.586,70.621 326.621,70.621"
          />
        </g>
        <path
          style={{ fill: "#67544D" }}
          d="M308.966,8.828H203.034c-34.074,0-61.793,27.727-61.793,61.793h35.31 c0-14.601,11.882-26.483,26.483-26.483h105.931c14.601,0,26.483,11.882,26.483,26.483h35.31 C370.759,36.555,343.04,8.828,308.966,8.828"
        />
      </g>
    </svg>
  );
};
