import { ReactNode } from 'react';
import tw, { styled, theme } from 'twin.macro';
import BodyText from '@atoms/BodyText';

interface IEventDetailProps {
	icon: ReactNode;
	text: string | number;
}

const EventDetailContainer = tw.li`
    flex
    content-center
`;

const IconContainer = tw.div`
  flex
  mr-1
  [> svg]:(h-5 w-5 self-center stroke-2 stroke-fuschia)
`;

const TextContainer = tw.div``;

const EventDetail = ({ icon, text }: IEventDetailProps) => {
	return (
		<EventDetailContainer>
			<IconContainer>{icon}</IconContainer>
			<TextContainer>
				<BodyText>{text}</BodyText>
			</TextContainer>
		</EventDetailContainer>
	);
};

export default EventDetail;
