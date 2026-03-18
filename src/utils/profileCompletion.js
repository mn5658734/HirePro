/**
 * Calculate profile completion percentage
 */

export function getProfileCompletion(profile) {
  const checks = [
    !!profile.contact,
    (profile.selectedRoles?.length || profile.skills?.length) > 0,
    (profile.days?.length || 0) > 0,
    !!profile.shift,
    (profile.credentials?.length || 0) > 0,
    !!profile.location,
    (profile.roleplayResponses?.length || 0) > 0,
    (profile.situationAnswers?.length || 0) > 0,
    !!profile.videoUrl,
    (profile.references?.length || 0) > 0,
  ]
  const filled = checks.filter(Boolean).length
  return Math.round((filled / checks.length) * 100)
}
