import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { publicImage } from '../lib/publicImage';

export function CampaignsSection() {
    enum CampainStatus {
        Ready = 'Полностью готова',
        Ranger = 'Следопыт',
        Wizard = 'Волшебник',
    }

    const campaigns = [
        {
            title: 'Проклятье Страда',
            level: '1-15 ур.',
            duration: 'Кампания',
            description: 'Темное готическое фентези о поиске надежды.',
            image: publicImage('0F779E50-B6D7-4578-8414-452E5941A07F.png'),
        },
        {
            title: 'Мышеловка',
            level: '4 ур.',
            duration: 'Ваншот',
            status: 'Для новичков',
            description:
                'Легкая и прямолинейная история о расследовании пропажи жителей.',
            image: publicImage('rat.jpg'),
        },
        {
            title: 'Трудности с гоблинами',
            level: '1 ур.',
            duration: 'Ваншот',
            status: 'Для новичков',
            description: 'Идеальное приключение для знакомства с игрой.',
            image: publicImage('goblins.jpg'),
        },
    ];

    return (
        <section id="campaigns" className="py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Кампании
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Все кампании и ваншоты которые я веду
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((campaign, index) => {
                        const badge =
                            campaign.status != null ? (
                                <Badge
                                    className={
                                        campaign.status === 'Active'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : campaign.status ===
                                                'Starting Soon'
                                              ? 'bg-blue-600 hover:bg-blue-700'
                                              : 'bg-gray-600 hover:bg-gray-700'
                                    }
                                >
                                    {campaign.status}
                                </Badge>
                            ) : null;
                        return (
                            <Card
                                key={index}
                                className="bg-slate-900 border-amber-900/30 overflow-hidden group transition-colors"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={campaign.image}
                                        alt={campaign.title}
                                        className="w-full h-full object-cover transition-transform duration-300"
                                    />
                                    if (campaign.status)
                                    <div className="absolute top-4 right-4">
                                        {badge}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-amber-100">
                                        {campaign.title}
                                    </CardTitle>
                                    <div className="flex justify-between text-gray-400">
                                        <p>{campaign.duration}</p>
                                        <CardDescription className="text-gray-400">
                                            {campaign.level}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-4">
                                        {campaign.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
