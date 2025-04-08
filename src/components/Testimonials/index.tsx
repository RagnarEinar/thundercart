import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 2.5rem;
  background: #f8f8f8;
  text-align: center;
`;

const TestimonialList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  width: 30%;
  margin: 1rem;
  background: #fff;
  padding: 1.2rem;
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'Amazing shopping experience!' },
    { name: 'Jane Smith', feedback: 'Fast delivery and great quality!' },
  ];

  return (
    <TestimonialsSection>
      <h2>Customer Reviews</h2>
      <TestimonialList>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>{testimonial.feedback}</p>
            <h4>- {testimonial.name}</h4>
          </TestimonialCard>
        ))}
      </TestimonialList>
    </TestimonialsSection>
  );
};

export default Testimonials;
