// - Є масив :
    let courses = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
            logo: '',
            price: 0,
            rating: 5,
            avgResult: 99
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced'],
            logo: '',
            price: 0,
            rating: 4.998,
            avgResult: 97
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'python core',
                'python advanced'],
            logo: '',
            price: 0,
            rating: 4.812,
            avgResult: 98
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
            logo: '',
            price: 0,
            rating: 4.65,
            avgResult: 97
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java'],
            logo: '',
            price: 0,
            rating: 4.772,
            avgResult: 100
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
            logo: '',
            price: 0,
            rating: 4.53,
            avgResult: 90
        }
    ];

// Створити під кожен елемент oкремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)

for (const item of courses) {
    let divGeneral = document.createElement('div');
    divGeneral.style.margin = '50px';
    let divTitle=document.createElement('div');
    divTitle.innerText = item.title;
    let divMonthDuration=document.createElement('div');
    divMonthDuration.innerText = item.monthDuration;
    let divHourDuration=document.createElement('div');
    divHourDuration.innerText = item.hourDuration;
    let ulModules=document.createElement('ul');
    for (let module of item.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ulModules.appendChild(li);
    }
    let divPrice=document.createElement('div');
    divPrice.innerText = item.price;
    let divRating=document.createElement('div');
    divRating.innerText = item.rating;
    let divAvgResult=document.createElement('div');
    divAvgResult.innerText = item.avgResult;

    divGeneral.append(divTitle, divMonthDuration, divHourDuration, ulModules, divPrice, divRating, divAvgResult);
    document.body.appendChild(divGeneral);
}