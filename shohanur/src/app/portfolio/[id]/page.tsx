import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  images: string[];
  bg: string;
  details: string;
}

export const revalidate = 3600;

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let project: Project | null = null;

  try {
    const res = await fetch(`https://backend-shohanur-1.onrender.com/portfolio/?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) notFound();

    const data = await res.json();
    const found = Array.isArray(data) ? data[0] : data;

    if (!found) notFound();

    project = {
      id: found.id,
      slug: found.slug,
      title: found.title,
      description: found.description,
      heroImage: `https://backend-shohanur-1.onrender.com${found.hero_image || found.heroImage}`,
      images: (found.images || []).map((img: any) => `https://backend-shohanur-1.onrender.com${img.image}`),
      bg: found.bg || "from-purple-500 to-indigo-600",
      details: found.details || "",
    };
  } catch (error) {
    console.error("Project fetch error:", error);
    notFound();
  }

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-8 pb-20 mt-25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Link
          href="/#portfolio"
          className="group inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-xl sm:text-2xl font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1.5" />
          Back to Campaigns
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </header>

        <div className="rounded-3xl overflow-hidden shadow-sm mb-16 bg-white border border-gray-100">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-contain p-4 sm:p-8 md:p-12 bg-gradient-to-br from-gray-50/80 to-white/60"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        {project.images.length > 0 && (
          <section className="mb-20">
            {/* <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">More visuals</h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {project.images.map((imgSrc, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.details && (
          <article className="prose prose-lg sm:prose-xl max-w-none prose-headings:text-gray-900 prose-strong:text-purple-700 prose-a:text-purple-600 hover:prose-a:underline">
            <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 border-b border-purple-100 pb-4">
              Campaign Case Study
            </h2>

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
              }}
            >
              {project.details.replace(/\\n/g, "\n")}
            </ReactMarkdown>
          </article>
        )}

        {!project.details && (
          <article className="prose prose-lg sm:prose-xl max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 border-b border-purple-100 pb-4">
              Campaign Overview & Results
            </h2>
            <p className="text-gray-700">Detailed case study coming soon...</p>
          </article>
        )}
      </div>
    </div>
  );
}
