import { GradientText } from "./gradient-text";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-5xl font-black text-white">
        <GradientText>{title}</GradientText>
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}