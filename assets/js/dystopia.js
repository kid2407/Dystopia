const START_DATE = new Date(2025, 8, 0)
const END_DATE = new Date(2025, 8, 10)
const TOTAL_DAYS = (END_DATE - START_DATE) / (1000 * 3600 * 24)


const DYSTOPIA = {
    getDayForArtist: (artist) => {
        let day = 1

        artist.classList.forEach((cssClass) => {
            if (cssClass.startsWith('day_')) {
                day = cssClass.split('_')[1]
            }
        })

        return day
    },

    revealArtists: () => {
        let currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)
        let currentDayCount = (currentDate - START_DATE) / (1000 * 3600 * 24)
        let allArtists = document.getElementById('artistGrid').children
        let finalDayOrLater = currentDate >= END_DATE

        if (finalDayOrLater) {
            for (let artist of allArtists) {
                artist.classList.remove('spoiler')
            }
        } else {
            for (let i = 0; i < allArtists.length; i++) {
                let currentArtist = allArtists[i]
                let artistDay = DYSTOPIA.getDayForArtist(currentArtist)
                if (currentDayCount >= artistDay) {
                    currentArtist.classList.remove('spoiler')
                }
            }
        }

        console.log(currentDayCount + " von " + TOTAL_DAYS)
    }
}

DYSTOPIA.revealArtists()
