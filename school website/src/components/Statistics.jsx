import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react';

const stats = [
  { id: 1, label: 'Students', value: 1000, suffix: '+', icon: Users, color: 'text-primary-blue' },
  { id: 2, label: 'Expert Teachers', value: 50, suffix: '+', icon: GraduationCap, color: 'text-sky-blue' },
  { id: 3, label: 'Years Excellence', value: 20, suffix: '+', icon: Award, color: 'text-golden-yellow' },
  { id: 4, label: 'Academic Growth', value: 100, suffix: '%', icon: TrendingUp, color: 'text-accent-red' },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 bg-white relative z-20 -mt-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-2xl p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center justify-center pt-8 md:pt-0 group">
                <div className={`p-4 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-sm`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-4xl font-heading font-bold text-gray-800 mb-2">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    "0" + stat.suffix
                  )}
                </h3>
                <p className="text-gray-600 font-body font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
